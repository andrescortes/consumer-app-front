import { ITokenResponse } from '../../shared/models';

export interface ILoginState {
  tokenResponse: ITokenResponse | null;
  isAuthenticated: boolean;
  error: string | null;
}

export const initialLoginState: ILoginState = {
  tokenResponse: null,
  isAuthenticated: false,
  error: null,
};
