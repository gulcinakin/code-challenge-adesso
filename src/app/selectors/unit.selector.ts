import {AppState} from '../models/app-state.model';
import {createSelector} from '@ngrx/store';
import {UnitState} from '../models/unit-state.model';
import {CostFilterTypesEnum} from '../enums/cost-filter-types.enum';

const selectUnitState = (state: AppState) => state.units;
export const selectUnits = createSelector(
  selectUnitState,
  (state: UnitState) => state.filteredList
);

export const selectAgeFilter = createSelector(
  selectUnitState,
  (state: UnitState) => state.filters.age
);
export const selectCostFoodFilter = createSelector(
  selectUnitState,
  (state: UnitState) => state.filters.cost.find(item => item.type === CostFilterTypesEnum.Food)
);
export const selectCostGoldFilter = createSelector(
  selectUnitState,
  (state: UnitState) => state.filters.cost.find(item => item.type === CostFilterTypesEnum.Gold)
);
export const selectCostWoodFilter = createSelector(
  selectUnitState,
  (state: UnitState) => state.filters.cost.find(item => item.type === CostFilterTypesEnum.Wood)
);

export const selectUnit = createSelector(
  selectUnitState,
  (state: UnitState) => state.unitItem
);
