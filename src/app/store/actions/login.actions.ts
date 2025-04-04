import { Action } from '@ngrx/store';
import { ILoginRequest, ITokenResponse } from '../../shared/models';

export enum LoginActionTypes {
  LOGIN = '[Login] Login',
  LOGIN_SUCCESS = '[Login] Login Success',
  LOGIN_FAILURE = '[Login] Login Failure',
  LOGIN_CLEAR = '[Login] Login Clear',
}

export class LoginAction implements Action {
  readonly type = LoginActionTypes.LOGIN;
  constructor(public payload: ILoginRequest) {}
}

export class LoginActionSuccess implements Action {
  readonly type = LoginActionTypes.LOGIN_SUCCESS;
  constructor(public payload: ITokenResponse) {}
}

export class LoginActionFailure implements Action {
  readonly type = LoginActionTypes.LOGIN_FAILURE;
  constructor(public payload: string) {}
}

export class LoginActionClear implements Action {
  readonly type = LoginActionTypes.LOGIN_CLEAR;
}

export type LoginActions = LoginAction | LoginActionSuccess | LoginActionFailure | LoginActionClear;
