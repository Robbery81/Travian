import { PriceInterface } from 'src/app/shared/interfaces/price.interface';

export interface UpgradePriceInterface {
  level: number;
  timesForBuild: number;
  production: number;
  culture: number;
  population: number;
  price: PriceInterface;
}

export interface UpgradeFieldPriceInterface {
  [key: string]: UpgradePriceInterface[];
}
