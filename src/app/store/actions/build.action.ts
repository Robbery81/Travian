import { createAction, props } from '@ngrx/store';
import { BuildingDto } from 'src/app/shared/interfaces/building.dto';
import { UpdateFieldInterface } from 'src/app/shared/interfaces/update-field.interface';
import { BackendErrorsInterface } from 'src/app/shared/interfaces/backend-errors.interface';

export enum BuildActionTypes {
  BUILD = '[Village] Build',
  BUILD_SUCCESS = '[Village] Build start success',
  BUILD_FAILURE = '[Village] Build start failure',

  BUILD_FINISH = '[Village] Build finish success'
}

export const buildAction = createAction(BuildActionTypes.BUILD, props<{ request: UpdateFieldInterface }>());

export const buildSuccessAction = createAction(BuildActionTypes.BUILD_SUCCESS, props<{ buildInfo: BuildingDto }>());

export const buildFailureAction = createAction(
  BuildActionTypes.BUILD_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
);

export const buildFinishAction = createAction(BuildActionTypes.BUILD_FINISH);
