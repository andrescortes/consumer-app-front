import { ITokenResponse } from '../../shared/models';

export interface ILoginState {
  tokenResponse: ITokenResponse | null;
  error: string | null;
}

export const initialLoginState: ILoginState = {
  tokenResponse: null,
  error: null,
};
