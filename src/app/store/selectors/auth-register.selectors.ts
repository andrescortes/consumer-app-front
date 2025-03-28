import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IRegisterState } from '../states';
import { AUTH_REGISTER_KEY } from '../../shared/constants/app-constants';

export const selectAuthRegisterState =
  createFeatureSelector<IRegisterState>(AUTH_REGISTER_KEY);

export const selectAuthRegisterMessage = createSelector(
  selectAuthRegisterState,
  (state: IRegisterState) => state?.message
);

export const selectAuthRegisterLoading = createSelector(
  selectAuthRegisterState,
  (state: IRegisterState) => state.loading
);

export const selectAuthRegisterError = createSelector(
  selectAuthRegisterState,
  (state: IRegisterState) => state?.error
);
