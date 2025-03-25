import { ICharacterState, IRegisterState } from '.';

export interface IAppState {
  characters: ICharacterState;
  register: IRegisterState;
}
