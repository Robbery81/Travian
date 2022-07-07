import { LoginStateInterface, initialLoginState } from 'src/app/store/states/login.state';
import { initialVillageState, VillageStateInterface } from 'src/app/store/states/village.state';

export interface AppStateInterface {
  login: LoginStateInterface;
  villages: VillageStateInterface;
}

export const initialAppState: AppStateInterface = {
  login: initialLoginState,
  villages: initialVillageState
};

export function getInitialState(): AppStateInterface {
  return initialAppState;
}
