import { createAction, props } from '@ngrx/store';

export enum PricesActionTypes {
  DOWNLOAD_SUCCESS = '[Price] Download success'
}

export const pricesSuccessAction = createAction(PricesActionTypes.DOWNLOAD_SUCCESS, props<{ price: any }>());
