import { CurrentUserInterface } from 'src/app/shared/interfaces/current-user.interface';
import { BackendErrorsInterface } from 'src/app/shared/interfaces/backend-errors.interface';

export interface LoginStateInterface {
  isSubmitting: boolean;
  currentUser: CurrentUserInterface | null;
  isLoggedIn: boolean;
  validationErrors: BackendErrorsInterface | null;
}

export const initialLoginState: LoginStateInterface = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: false,
  validationErrors: null
};
