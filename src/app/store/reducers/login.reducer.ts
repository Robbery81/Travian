import { createReducer, on } from '@ngrx/store';
import { loginAction, loginFailureAction, loginSuccessAction } from 'src/app/store/actions/login.action';
import { initialLoginState } from 'src/app/store/states/login.state';

import { LoginStateInterface } from 'src/app/store/states/login.state';

export const loginReducer = createReducer(
  initialLoginState,
  on(
    loginAction,
    (state): LoginStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null
    })
  ),
  on(
    loginSuccessAction,
    (state, action): LoginStateInterface => ({
      ...state,
      currentUser: action.currentUser,
      isSubmitting: false,
      isLoggedIn: true
    })
  ),

  on(
    loginFailureAction,
    (state, action): LoginStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })
  )
);
