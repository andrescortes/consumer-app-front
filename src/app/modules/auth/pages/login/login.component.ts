import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  selectAuthLoginError,
  selectAuthLoginTokens,
} from '../../../../store/selectors';
import { filter, Subject, takeUntil } from 'rxjs';
import { NotificationService } from '../../../../shared/services';
import { ILoginRequest } from '../../../../shared/models';
import { LoginAction } from '../../../../store/actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm!: FormGroup;
  private readonly unsub$ = new Subject<void>();
  tokens$ = this.store.select(selectAuthLoginTokens);
  error$ = this.store.select(selectAuthLoginError);

  constructor(
    private readonly fb: FormBuilder,
    private readonly store: Store,
    private readonly notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.onChangesTokens();
    this.onChangesError();
  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }

  createForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  login() {
    if (this.loginForm.valid) {
      console.log('Login Data:', this.loginForm.value);
      const loginRequest: ILoginRequest = {
        username: this.loginForm.get('email')?.value,
        password: this.loginForm.get('password')?.value,
      };
      this.store.dispatch(new LoginAction(loginRequest));
    } else {
      console.log('Invalid credentials');
      this.notificationService.show('warn', 'Something went wrong');
    }
  }

  onChangesTokens(): void {
    this.tokens$
      .pipe(
        takeUntil(this.unsub$),
        filter((value) => !!value)
      )
      .subscribe({
        next: (value) => {
          console.log('tokenResponse', value);
          this.notificationService.show('success', 'Login successfully');
        },
      });
  }

  onChangesError(): void {
    this.error$
      .pipe(
        takeUntil(this.unsub$),
        filter((value) => !!value)
      )
      .subscribe({
        next: (value) => {
          console.log('message', value);
          this.notificationService.show('error', value ?? '');
        },
      });
  }
}
