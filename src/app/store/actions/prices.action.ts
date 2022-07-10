import { createAction, props } from '@ngrx/store';
import { UpgradeFieldPriceInterface } from 'src/app/shared/interfaces/upgrade-field-price.interface';

export enum PricesActionTypes {
  DOWNLOAD_SUCCESS = '[Price] Download success'
}

export const pricesSuccessAction = createAction(
  PricesActionTypes.DOWNLOAD_SUCCESS,
  props<{ resources: UpgradeFieldPriceInterface }>()
);
