import { ResourceFieldTypeEnum } from 'src/app/shared/enums/resource-field-type.enum';

export interface ResourceFieldInterface {
  d: string;
  index: number;
  type: ResourceFieldTypeEnum;
  level: number;
}
