import { PriceInterface } from 'src/app/shared/interfaces/price.interface';
import { TimeForBuildInterface } from 'src/app/shared/interfaces/time-for-build.interface';

export interface UpgradeFieldPriceInterface {
  [key: string]: [
    {
      level: number;
      timesForBuild: TimeForBuildInterface;
      production: number;
      price: PriceInterface;
    }
  ];
}
