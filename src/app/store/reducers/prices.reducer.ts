import { createReducer, on } from '@ngrx/store';
import { pricesSuccessAction } from 'src/app/store/actions/prices.action';
import { initialPricesState } from 'src/app/store/states/price.state';

export const pricesReducer = createReducer(
  initialPricesState,
  on(pricesSuccessAction, (state, action): any => ({
    ...state,
    resources: action.resources
  }))
);
