import { AppStateInterface } from 'src/app/store/states/app.state';
import { createSelector } from '@ngrx/store';

import { BuildStateInterface } from 'src/app/store/states/build.state';

export const buildFeatureSelector = (state: AppStateInterface) => state.build;

export const dataBuildSelector = createSelector(buildFeatureSelector, (state: BuildStateInterface) => state.buildInfo);
