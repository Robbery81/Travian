import { createAction, props } from '@ngrx/store';
import { CurrentUserInterface } from 'src/app/shared/interfaces/current-user.interface';
import { LoginRequestInterface } from 'src/app/shared/interfaces/login-request.interface';
import { BackendErrorsInterface } from 'src/app/shared/interfaces/backend-errors.interface';

export enum LoginActionTypes {
  LOGIN = '[Login] Login',
  LOGIN_SUCCESS = '[Login] Login success',
  LOGIN_FAILURE = '[Login] Login failure'
}

export const loginAction = createAction(LoginActionTypes.LOGIN, props<{ request: LoginRequestInterface }>());

export const loginSuccessAction = createAction(
  LoginActionTypes.LOGIN_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const loginFailureAction = createAction(
  LoginActionTypes.LOGIN_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
);
