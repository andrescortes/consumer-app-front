import { Character } from '../../shared/models';

export interface ICharacterState {
  characters: Character[];
  loading: boolean;
  error: string | null;
}

export const initialCharacterState: ICharacterState = {
  characters: [],
  loading: false,
  error: null,
};
