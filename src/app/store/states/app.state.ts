import { ICharacterState, ILoginState, IRegisterState } from '.';

export interface IAppState {
  characters: ICharacterState;
  register: IRegisterState;
  login: ILoginState;
}
