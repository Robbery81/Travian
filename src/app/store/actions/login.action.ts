import { createAction, props } from '@ngrx/store';
import { LoginRequestInterface } from 'src/app/shared/interfaces/login-request.interface';

export enum ActionTypesEnum {
  LOGIN = '[Login] Login',
  LOGIN_SUCCESS = '[Login] Login success',
  LOGIN_FAILURE = '[Login] Login failure'
}

export const loginAction = createAction(ActionTypesEnum.LOGIN, props<LoginRequestInterface>());
