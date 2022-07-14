import { createReducer, on } from '@ngrx/store';
import { buildFinishAction, buildSuccessAction } from 'src/app/store/actions/build.action';
import { initialBuildState } from 'src/app/store/states/build.state';

export const buildReducer = createReducer(
  initialBuildState,
  on(buildSuccessAction, (state, action): any => ({
    ...state,
    buildInfo: action.buildInfo
  })),
  on(buildFinishAction, (state): any => ({
    ...state,
    buildInfo: null
  }))
);
