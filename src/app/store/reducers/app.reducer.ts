import { ActionReducerMap } from '@ngrx/store';

import { loginReducer } from 'src/app/store/reducers/login.reducer';
import { buildReducer } from 'src/app/store/reducers/build.reducer';
import { pricesReducer } from 'src/app/store/reducers/prices.reducer';
import { villagesReducer } from 'src/app/store/reducers/village.reducer';

import { AppStateInterface } from 'src/app/store/states/app.state';

export const appReducer: ActionReducerMap<AppStateInterface, any> = {
  login: loginReducer,
  build: buildReducer,
  prices: pricesReducer,
  villages: villagesReducer
};
