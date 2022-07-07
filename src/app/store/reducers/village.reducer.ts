import { createReducer, on } from '@ngrx/store';
import { initialVillageState, VillageStateInterface } from 'src/app/store/states/village.state';
import { villageSuccessAction } from 'src/app/store/actions/village.action';

export const villagesReducer = createReducer(
  initialVillageState,
  on(
    villageSuccessAction,
    (state, action): VillageStateInterface => ({
      ...state,
      currentVillage: action.currentVillage,
      validationErrors: null
    })
  )
);
