import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Message } from 'primeng/api';
import { filter, Observable, Subject, takeUntil } from 'rxjs';
import { IRegister, RoleModel } from '../../../../shared/models';
import { Register } from '../../../../store/actions';
import { ROLE_TYPES_ALLOWED } from '../../../../shared/constants/app-constants';
import {
  selectAuthRegisterError,
  selectAuthRegisterMessage,
} from '../../../../store/selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit, OnDestroy {
  private readonly unsubscribe$ = new Subject<void>();
  registerForm!: FormGroup;
  registerMessage$!: Observable<string>;
  registerError$!: Observable<string | null>;
  roles = ROLE_TYPES_ALLOWED;
  messages: Message[] = [];

  constructor(
    private readonly fb: FormBuilder,
    private readonly store: Store,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.registerMessage$ = this.store.select(selectAuthRegisterMessage);
    this.registerError$ = this.store.select(selectAuthRegisterError);
    this.messageOnChanges();
    this.errorOnChanges();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  createForm(): void {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      roles: ['', Validators.required],
      enabled: [true, Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  register() {
    const { username, roles, enabled, password, confirmPassword } =
      this.registerForm.value;
    if (password !== confirmPassword) {
      const error = 'Passwords do not match';
      this.showMessageError(error);
      return;
    }
    if (this.registerForm.valid) {
      const extractedRoles = roles.map((role: RoleModel) => role.roleApply);
      const registerData: IRegister = {
        username,
        roles: extractedRoles,
        enabled,
        password,
      };
      console.log('Register Data:', registerData);
      this.store.dispatch(new Register(registerData));
    } else {
      const error = 'Invalid credentials';
      this.showMessageError(error);
    }
  }

  messageOnChanges() {
    this.registerMessage$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((message) => {
        console.log('Message from request to server:', message);
        if (message) {
          this.showMessageSuccess(message);
          this.router.navigate(['../login']);
        }
      });
  }

  errorOnChanges() {
    this.registerError$
      .pipe(
        takeUntil(this.unsubscribe$),
        filter((value) => !!value)
      )
      .subscribe((error) => {
        console.log('Error from request to server:', error);
        if (error) {
          this.showMessageError(error);
        }
      });
  }

  showMessageSuccess(content: string): void {
    this.messages = [
      { severity: 'success', summary: 'Success', detail: content },
    ];
  }

  showMessageError(content: string): void {
    this.messages = [
      { severity: 'error', summary: 'Error', detail: content },
    ];
  }

  clearMessages(): void {
    this.messages = [];
  }
}
