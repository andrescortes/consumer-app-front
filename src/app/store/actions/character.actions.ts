import { Action } from '@ngrx/store';

export enum CharacterActionTypes {
  LOAD_CHARACTERS = '[Character] Load Characters',
  LOAD_CHARACTERS_SUCCESS = '[Character] Load Characters Success',
  LOAD_CHARACTERS_FAILURE = '[Character] Load Characters Failure',
  REMOVE_CHARACTER = '[Character] Remove Character',
}

export class LoadCharacters implements Action {
  readonly type = CharacterActionTypes.LOAD_CHARACTERS;
}

export class LoadCharactersSuccess implements Action {
  readonly type = CharacterActionTypes.LOAD_CHARACTERS_SUCCESS;
  constructor(public payload: any) {}
}

export class LoadCharactersFailure implements Action {
  readonly type = CharacterActionTypes.LOAD_CHARACTERS_FAILURE;
  constructor(public payload: any) {}
}

export class RemoveCharacter implements Action {
  readonly type = CharacterActionTypes.REMOVE_CHARACTER;
  constructor(public payload: number) {}
}

export type CharacterActions =
  | LoadCharacters
  | LoadCharactersSuccess
  | LoadCharactersFailure
  | RemoveCharacter;
