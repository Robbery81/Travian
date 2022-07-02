import { LoginStateInterface } from 'src/app/store/states/login.state';
import { createReducer, on } from '@ngrx/store';
import { loginAction } from 'src/app/store/actions/login.action';
import { initialLoginState } from 'src/app/store/states/login.state';

export const loginReducer = createReducer(
  initialLoginState,
  on(
    loginAction,
    (state): LoginStateInterface => ({
      ...state,
      isSubmitting: true
    })
  )
);
