import { createAction, props } from '@ngrx/store';
import { VillageInterface } from 'src/app/shared/interfaces/village.interface';
import { BackendErrorsInterface } from 'src/app/shared/interfaces/backend-errors.interface';

export enum VillageActionTypes {
  DOWNLOAD = '[Village] Download',
  DOWNLOAD_SUCCESS = '[Village] Download success',
  DOWNLOAD_FAILURE = '[Village] Download failure'
}

export const villageAction = createAction(VillageActionTypes.DOWNLOAD);

export const villageSuccessAction = createAction(
  VillageActionTypes.DOWNLOAD_SUCCESS,
  props<{ currentVillage: VillageInterface }>()
);

export const villageFailureAction = createAction(
  VillageActionTypes.DOWNLOAD_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
);
