import { LoginActions, LoginActionTypes } from '../actions';
import { ILoginState, initialLoginState } from '../states';

export function loginReducer(
  state = initialLoginState,
  action: LoginActions
): ILoginState {
  switch (action.type) {
    case LoginActionTypes.LOGIN:
      return {
        ...state,
      };
    case LoginActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        tokenResponse: action.payload,
      };
    case LoginActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case LoginActionTypes.LOGIN_CLEAR:
      return {
        ...state,
        tokenResponse: null,
        error: null,
      };

    default:
      return state;
  }
}
