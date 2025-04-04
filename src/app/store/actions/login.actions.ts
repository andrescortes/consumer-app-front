import { Action } from '@ngrx/store';
import { ILogin, ITokenResponse } from '../../shared/models';

export enum LoginActionTypes {
  LOGIN = '[Login] Login',
  LOGIN_SUCCESS = '[Login] Login Success',
  LOGIN_FAILURE = '[Login] Login Failure',
  LOGIN_CLEAR = '[Login] Login Clear',
}

export class Login implements Action {
  readonly type = LoginActionTypes.LOGIN;
  constructor(public payload: ILogin) {}
}

export class LoginSuccess implements Action {
  readonly type = LoginActionTypes.LOGIN_SUCCESS;
  constructor(public payload: ITokenResponse) {}
}

export class LoginFailure implements Action {
  readonly type = LoginActionTypes.LOGIN_FAILURE;
  constructor(public payload: string) {}
}

export class LoginClear implements Action {
  readonly type = LoginActionTypes.LOGIN_CLEAR;
}

export type LoginActions = Login | LoginSuccess | LoginFailure | LoginClear;
