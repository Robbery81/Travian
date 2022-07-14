import { LoginStateInterface, initialLoginState } from 'src/app/store/states/login.state';
import { initialVillageState, VillageStateInterface } from 'src/app/store/states/village.state';
import { initialPricesState, PriceStateInterface } from 'src/app/store/states/price.state';
import { BuildStateInterface, initialBuildState } from 'src/app/store/states/build.state';

export interface AppStateInterface {
  login: LoginStateInterface;
  build: BuildStateInterface;
  prices: PriceStateInterface;
  villages: VillageStateInterface;
}

export const initialAppState: AppStateInterface = {
  login: initialLoginState,
  build: initialBuildState,
  prices: initialPricesState,
  villages: initialVillageState
};

export function getInitialState(): AppStateInterface {
  return initialAppState;
}
