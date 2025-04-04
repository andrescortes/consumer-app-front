import { Action } from '@ngrx/store';
import { IRegister } from '../../shared/models';

export enum RegisterActionTypes {
  REGISTER = '[Register] Register',
  REGISTER_SUCCESS = '[Register] Register Success',
  REGISTER_FAILURE = '[Register] Register Failure',
  REGISTER_CLEAR = '[Register] Register Clear',
}

export class RegisterAction implements Action {
  readonly type = RegisterActionTypes.REGISTER;
  constructor(public payload: IRegister) {}
}

export class RegisterActionSuccess implements Action {
  readonly type = RegisterActionTypes.REGISTER_SUCCESS;
  constructor(public payload: string) {}
}

export class RegisterActionFailure implements Action {
  readonly type = RegisterActionTypes.REGISTER_FAILURE;
  constructor(public payload: string) {}
}

export class RegisterActionClear implements Action {
  readonly type = RegisterActionTypes.REGISTER_CLEAR;
}

export type RegisterActions =
  | RegisterAction
  | RegisterActionSuccess
  | RegisterActionFailure
  | RegisterActionClear;
