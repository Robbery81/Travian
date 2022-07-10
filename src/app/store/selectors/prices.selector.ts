import { AppStateInterface } from 'src/app/store/states/app.state';
import { createSelector } from '@ngrx/store';
import { PriceStateInterface } from 'src/app/store/states/price.state';

export const pricesFeatureSelector = (state: AppStateInterface) => state.prices;

export const priceResourcesSelector = createSelector(
  pricesFeatureSelector,
  (state: PriceStateInterface) => state.resources
);
