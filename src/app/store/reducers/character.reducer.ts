import {
  CharacterActions,
  CharacterActionTypes,
} from '../actions/character.actions';
import {
  ICharacterState,
  initialCharacterState,
} from '../states/character.states';

export function characterReducer(
  state = initialCharacterState,
  action: CharacterActions
): ICharacterState {
  switch (action.type) {
    case CharacterActionTypes.LOAD_CHARACTERS:
      return {
        ...state,
        loading: true,
      };
    case CharacterActionTypes.LOAD_CHARACTERS_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        loading: false,
      };
    case CharacterActionTypes.LOAD_CHARACTERS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case CharacterActionTypes.REMOVE_CHARACTER:
      return {
        ...state,
        characters: state.characters.filter(
          (character) => character.id !== action.payload
        ),
      };
    default:
      return state;
  }
}
