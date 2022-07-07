import { ResourcesInterface } from 'src/app/shared/interfaces/resources.interface';
import { ResourceFieldInterface } from 'src/app/shared/interfaces/resource-field.interface';

export interface VillageInterface {
  name: string;
  resources: ResourcesInterface;
  resourceFields: ResourceFieldInterface[];
}
