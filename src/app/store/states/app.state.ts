import { LoginStateInterface, initialLoginState } from 'src/app/store/states/login.state';
import { initialVillageState, VillageStateInterface } from 'src/app/store/states/village.state';
import { initialPricesState, PriceStateInterface } from 'src/app/store/states/price.state';

export interface AppStateInterface {
  login: LoginStateInterface;
  villages: VillageStateInterface;
  prices: PriceStateInterface;
}

export const initialAppState: AppStateInterface = {
  login: initialLoginState,
  villages: initialVillageState,
  prices: initialPricesState
};

export function getInitialState(): AppStateInterface {
  return initialAppState;
}
