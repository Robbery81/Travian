import { UpgradeFieldPriceInterface } from 'src/app/shared/interfaces/upgrade-field-price.interface';

export interface PriceStateInterface {
  resources: UpgradeFieldPriceInterface | null;
}

export const initialPricesState: PriceStateInterface = {
  resources: null
};
