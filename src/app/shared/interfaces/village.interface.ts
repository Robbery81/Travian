import { ResourcesInterface } from 'src/app/shared/interfaces/resources.interface';
import { ResourceFieldInterface } from 'src/app/shared/interfaces/resource-field.interface';
import { PriceInterface } from 'src/app/shared/interfaces/price.interface';

export interface VillageInterface {
  name: string;
  resources: ResourcesInterface;
  production: PriceInterface;
  resourceFields: ResourceFieldInterface[];
}
