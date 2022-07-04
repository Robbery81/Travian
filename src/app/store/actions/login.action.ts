import { createAction, props } from '@ngrx/store';
import { LoginRequestInterface } from 'src/app/shared/interfaces/login-request.interface';
import { CurrentUserInterface } from 'src/app/shared/interfaces/current-user.interface';
import { BackendErrorsInterface } from 'src/app/shared/interfaces/backend-errors.interface';

export enum ActionTypesEnum {
  LOGIN = '[Login] Login',
  LOGIN_SUCCESS = '[Login] Login success',
  LOGIN_FAILURE = '[Login] Login failure'
}

export const loginAction = createAction(ActionTypesEnum.LOGIN, props<{ request: LoginRequestInterface }>());

export const loginSuccessAction = createAction(
  ActionTypesEnum.LOGIN_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const loginFailureAction = createAction(
  ActionTypesEnum.LOGIN_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
);
