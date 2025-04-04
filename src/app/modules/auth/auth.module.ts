import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { RouterLink } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { AuthRoutingModule } from './auth-routing.module';

import { AUTH_LOGIN_KEY, AUTH_REGISTER_KEY } from '../../shared/constants/app-constants';
import { AuthRegisterEffects } from '../../store/effects/register/auth-register.effects';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { loginReducer, registerReducer } from '../../store/reducers';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    AuthRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    SharedModule,
    StoreModule.forFeature(AUTH_REGISTER_KEY, registerReducer),
    StoreModule.forFeature(AUTH_LOGIN_KEY, loginReducer),
    EffectsModule.forFeature([AuthRegisterEffects]),
  ],
})
export class AuthModule {}
