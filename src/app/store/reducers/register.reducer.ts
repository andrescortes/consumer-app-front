import { RegisterActions, RegisterActionTypes } from '../actions';
import { initialRegisterState, IRegisterState } from '../states';

export function registerReducer(
  state = initialRegisterState,
  action: RegisterActions
): IRegisterState {
  switch (action.type) {
    case RegisterActionTypes.REGISTER:
      return {
        ...state,
        loading: true,
      };
    case RegisterActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        message: action.payload,
        loading: false,
      };
    case RegisterActionTypes.REGISTER_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
