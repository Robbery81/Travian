import { createAction, props } from '@ngrx/store';

import { AuthResponseInterface } from 'src/app/shared/interfaces/auth-response.interface';
import { BackendErrorsInterface } from 'src/app/shared/interfaces/backend-errors.interface';

export enum TokenRefreshActionTypes {
  TOKEN_REFRESH = '[Token] Refresh',
  TOKEN_REFRESH_SUCCESS = '[Token] Refresh success',
  TOKEN_REFRESH_FAILURE = '[Token] Refresh failure'
}

export const tokenRefreshAction = createAction(TokenRefreshActionTypes.TOKEN_REFRESH);

export const tokenRefreshSuccessAction = createAction(
  TokenRefreshActionTypes.TOKEN_REFRESH_SUCCESS,
  props<{ response: AuthResponseInterface }>()
);

export const tokenRefreshFailureAction = createAction(
  TokenRefreshActionTypes.TOKEN_REFRESH_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
);
