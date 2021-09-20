import {createAction, props} from '@ngrx/store';
import {UnitModel} from '../models/unit.model';
import {AgeFilterTypesEnum} from '../enums/age-filter-types.enum';
import {CostFilterTypesEnum} from '../enums/cost-filter-types.enum';

export const getUnitList = createAction(
  '[Unit API] Get Units');

export const getUnitListSuccess = createAction(
  '[Unit API] Get Units Success',
  props<{ units: UnitModel[] }>()
);

export const changeAgeFilter = createAction(
  '[Change Age Filter]',
  props<{ ageFilter: AgeFilterTypesEnum }>()
);

export const addCostFilter = createAction(
  '[Add Cost Filter]',
  props<{ costFilterType: CostFilterTypesEnum }>()
);

export const removeCostFilter = createAction(
  '[Remove Cost Filter]',
  props<{ costFilterType: CostFilterTypesEnum }>()
);

export const changeCostFilterMinValue = createAction(
  '[Change Cost Filter Min Value]',
  props<{ costFilterMinValue: number, costFilterType: CostFilterTypesEnum }>()
);

export const changeCostFilterMaxValue = createAction(
  '[Change Cost Filter Max Value]',
  props<{ costFilterMaxValue: number, costFilterType: CostFilterTypesEnum }>()
);

export const getUnitDetail = createAction(
  '[Get Unit Detail]',
  props<{ unitId: number }>()
);

export const setUnitDetail = createAction(
  '[Set Unit Detail]',
  props<{ unit: UnitModel }>()
);
