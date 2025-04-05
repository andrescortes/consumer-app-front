import { LoginActions, LoginActionTypes } from '../actions';
import { ILoginState, initialLoginState } from '../states';

export function loginReducer(
  state = initialLoginState,
  action: LoginActions
): ILoginState {
  switch (action.type) {
    case LoginActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        tokenResponse: action.payload,
        isAuthenticated: true,
        error: null,
      };
    case LoginActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        error: action.payload,
      };
    case LoginActionTypes.LOGIN_CLEAR:
      return {
        tokenResponse: null,
        isAuthenticated: false,
        error: null,
      };

    default:
      return state;
  }
}
