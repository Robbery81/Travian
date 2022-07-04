import { AppStateInterface } from 'src/app/store/states/app.state';
import { LoginStateInterface } from 'src/app/store/states/login.state';
import { createSelector } from '@ngrx/store';

export const loginFeatureSelector = (state: AppStateInterface): LoginStateInterface => state.login;

export const isSubmittingSelector = createSelector(
  loginFeatureSelector,
  (state: LoginStateInterface) => state.isSubmitting
);