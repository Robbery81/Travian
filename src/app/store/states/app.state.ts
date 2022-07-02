import { LoginStateInterface, initialLoginState } from 'src/app/store/states/login.state';

export interface AppStateInterface {
  login: LoginStateInterface;
}

export const initialAppState: AppStateInterface = {
  login: initialLoginState
};

export function getInitialState(): AppStateInterface {
  return initialAppState;
}
