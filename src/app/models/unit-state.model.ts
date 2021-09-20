import {UnitModel} from './unit.model';
import {AgeFilterTypesEnum} from '../enums/age-filter-types.enum';
import {CostFilterModel} from './cost-filter.model';

export interface UnitState {
  units: UnitModel[];
  unitItem: UnitModel;
  filteredList: UnitModel[];
  listLoaded: boolean;
  pending: boolean;
  filters: { age: AgeFilterTypesEnum, cost: any[] };
}
