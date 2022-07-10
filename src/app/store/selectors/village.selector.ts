import { AppStateInterface } from 'src/app/store/states/app.state';
import { createSelector } from '@ngrx/store';
import { VillageStateInterface } from 'src/app/store/states/village.state';

export const villagesFeatureSelector = (state: AppStateInterface): VillageStateInterface => state.villages;

export const currentVillageSelector = createSelector(
  villagesFeatureSelector,
  (state: VillageStateInterface) => state.currentVillage
);

export const resourcesFieldsSelector = createSelector(
  villagesFeatureSelector,
  (state: VillageStateInterface) => state.currentVillage?.resourceFields
);
