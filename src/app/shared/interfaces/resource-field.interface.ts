import { ResourcesInterface } from 'src/app/shared/interfaces/resources.interface';
import { TimeForBuildInterface } from 'src/app/shared/interfaces/time-for-build.interface';
import { ResourceFieldTypeEnum } from 'src/app/shared/enums/resource-field-type.enum';

export interface ResourceFieldInterface {
  type: ResourceFieldTypeEnum;
  level: number;
  productions: number[];
  prices: ResourcesInterface[];
  timeForBuild: TimeForBuildInterface[];
}
