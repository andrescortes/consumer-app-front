import { ActionReducerMap } from '@ngrx/store';
import { characterReducer } from './character.reducer';
import { IAppState } from '../states/app.state';

export const appReducer: ActionReducerMap<IAppState, any> = {
  characters: characterReducer,
};
