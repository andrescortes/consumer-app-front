import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../states/app.state';
import { characterReducer, loginReducer, registerReducer } from '.';

export const appReducer: ActionReducerMap<IAppState, any> = {
  characters: characterReducer,
  register: registerReducer,
  login: loginReducer,
};
