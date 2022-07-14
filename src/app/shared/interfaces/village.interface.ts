import { BuildingDto } from 'src/app/shared/interfaces/building.dto';

import { PriceInterface } from 'src/app/shared/interfaces/price.interface';
import { ResourcesInterface } from 'src/app/shared/interfaces/resources.interface';
import { ResourceFieldInterface } from 'src/app/shared/interfaces/resource-field.interface';

export interface VillageInterface {
  name: string;
  building: BuildingDto;
  resources: ResourcesInterface;
  production: PriceInterface;
  resourceFields: ResourceFieldInterface[];
}
