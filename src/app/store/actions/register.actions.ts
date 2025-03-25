import { Action } from '@ngrx/store';
import { IRegister } from '../../shared/models';

export enum RegisterActionTypes {
  REGISTER = '[Register] Register',
  REGISTER_SUCCESS = '[Register] Register Success',
  REGISTER_FAILURE = '[Register] Register Failure',
}

export class Register implements Action {
  readonly type = RegisterActionTypes.REGISTER;
  constructor(public payload: IRegister) {}
}

export class RegisterSuccess implements Action {
  readonly type = RegisterActionTypes.REGISTER_SUCCESS;
  constructor(public payload: string) {}
}

export class RegisterFailure implements Action {
  readonly type = RegisterActionTypes.REGISTER_FAILURE;
  constructor(public payload: string) {}
}

export type RegisterActions = Register | RegisterSuccess | RegisterFailure;
