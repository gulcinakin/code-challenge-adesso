import {CostFilterTypesEnum} from '../enums/cost-filter-types.enum';

export interface CostFilterModel {
  type: CostFilterTypesEnum;
  min: number;
  max: number;
}
