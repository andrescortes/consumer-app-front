import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { filter, Observable, Subject, takeUntil } from 'rxjs';
import { IRegister, RoleModel } from '../../../../shared/models';
import { Register } from '../../../../store/actions';
import { ROLE_TYPES_ALLOWED } from '../../../../shared/constants/app-constants';
import {
  selectAuthRegisterError,
  selectAuthRegisterMessage,
} from '../../../../store/selectors';
import { Router } from '@angular/router';
import { NotificationService } from '../../../../shared/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit, OnDestroy {
  private readonly unsubscribe$ = new Subject<void>();
  registerForm!: FormGroup;
  registerMessage$!: Observable<string>;
  registerError$!: Observable<string | null>;
  roles = ROLE_TYPES_ALLOWED;

  constructor(
    private readonly fb: FormBuilder,
    private readonly store: Store,
    private readonly router: Router,
    private readonly notificationService: NotificationService
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
      this.notificationService.show('error', 'Passwords do not match');
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
      this.store.dispatch(new Register(registerData));
    } else {
      this.notificationService.show('error', 'Invalid credentials');
    }
  }

  messageOnChanges() {
    this.registerMessage$
      .pipe(
        takeUntil(this.unsubscribe$),
        filter((value) => !!value)
      )
      .subscribe((message) => {
        if (message) {
          this.notificationService.show('success', message);
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
        if (error) {
          this.notificationService.show('error', error);
        }
      });
  }
}
