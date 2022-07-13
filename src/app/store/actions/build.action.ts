import { createAction } from '@ngrx/store';

export enum BuildActionTypes {
  BUILD = '[Village] Build',
  BUILD_SUCCESS = '[Village] Build success',
  BUILD_FAILURE = '[Village] Build failure'
}

export const buildAction = createAction(BuildActionTypes.BUILD);

export const buildSuccessAction = createAction(BuildActionTypes.BUILD_SUCCESS);

export const buildFailureAction = createAction(BuildActionTypes.BUILD_FAILURE);
