import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ILoginState } from '../states';
import { AUTH_LOGIN_KEY } from '../../shared/constants/app-constants';

export const selectAuthLoginState =
  createFeatureSelector<ILoginState>(AUTH_LOGIN_KEY);

export const selectAuthLoginTokens = createSelector(
  selectAuthLoginState,
  (state: ILoginState) => state.tokenResponse
);

export const selectAuthLoginIsAuthenticated = createSelector(
  selectAuthLoginState,
  (state: ILoginState) => state.isAuthenticated
);

export const selectAuthLoginError = createSelector(
  selectAuthLoginState,
  (state: ILoginState) => state.error
);
