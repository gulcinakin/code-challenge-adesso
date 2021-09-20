import {createReducer, on} from '@ngrx/store';
import {
  addCostFilter,
  changeAgeFilter, changeCostFilterMaxValue,
  changeCostFilterMinValue, getUnitDetail,
  getUnitList,
  getUnitListSuccess,
  removeCostFilter, setUnitDetail
} from '../actions/unit.actions';
import {AgeFilterTypesEnum} from '../enums/age-filter-types.enum';
import {CostFilterTypesEnum} from '../enums/cost-filter-types.enum';
import {CostFilterModel} from '../models/cost-filter.model';
import {CostModel} from '../models/cost.model';
import {UnitModel} from '../models/unit.model';
import {UnitState} from '../models/unit-state.model';
import {CostValueTypesEnum} from '../enums/cost-value-types.enum';

export const initialState: UnitState = {
    units: [],
    unitItem: null,
    filteredList: [],
    pending: false,
    listLoaded: false,
    filters: {
      age: AgeFilterTypesEnum.All,
      cost: []
    },
  }
;

const _unitReducer = createReducer(initialState, on(getUnitList, (state) => {
  return {...state, pending: true};
}), on(getUnitListSuccess, (state, {units}) => {
  return {...state, pending: false, units, listLoaded: true, filteredList: state.listLoaded ? state.filteredList : units};
}), on(changeAgeFilter, (state, {ageFilter}) => {
  const updatedState = {...state, filters: {...state.filters, age: ageFilter}};
  const filteredList = filterUnitList(state.units, updatedState.filters);
  return {...updatedState, filteredList};
}), on(addCostFilter, (state, {costFilterType}) => {
  const updatedState = {...state, filters: {...state.filters, cost: state.filters.cost.concat([{type: costFilterType, min: 0, max: 200}])}};
  const filteredList = filterUnitList(state.units, updatedState.filters);
  return {...updatedState, filteredList};
}), on(removeCostFilter, (state, {costFilterType}) => {
  const updatedState = {...state, filters: {...state.filters, cost: removeCostFilterState(state.filters, costFilterType)}};
  const filteredList = filterUnitList(state.units, updatedState.filters);
  return {...updatedState, filteredList};
}), on(changeCostFilterMinValue, (state, {costFilterMinValue, costFilterType}) => {
  const updatedState = {
    ...state,
    filters: {...state.filters, cost: setCostValue(state.filters, costFilterMinValue, CostValueTypesEnum.min, costFilterType)}
  };
  const filteredList = filterUnitList(state.units, updatedState.filters);
  return {...updatedState, filteredList};
}), on(changeCostFilterMaxValue, (state, {costFilterMaxValue, costFilterType}) => {
  const updatedState = {
    ...state,
    filters: {...state.filters, cost: setCostValue(state.filters, costFilterMaxValue, CostValueTypesEnum.max, costFilterType)}
  };
  const filteredList = filterUnitList(state.units, updatedState.filters);
  return {...updatedState, filteredList};
}), on(setUnitDetail, (state, {unit}) => {
  return {...state, unitItem: unit};
}));

function setCostValue(filters, costValue: number, costValueType: CostValueTypesEnum, costType: CostFilterTypesEnum): CostFilterModel[] {
  return filters.cost.map(x => {
    const item = Object.assign({}, x);
    if (item.type === costType) {
      if (costValueType === CostValueTypesEnum.min) {
        item.min = costValue;
      }
      if (costValueType === CostValueTypesEnum.max) {
        item.max = costValue;
      }
    }
    return item;
  });
}

function removeCostFilterState(filters, costType: CostFilterTypesEnum): CostFilterModel[] {
  return filters.cost.filter(x => x.type !== costType);
}

function hasCost(itemCost: CostModel, cost: CostFilterModel): boolean {
  if (itemCost) {
    if (!itemCost[cost.type]) {
      return false;
    }
    if (itemCost[cost.type]) {
      if (itemCost[cost.type] >= cost.min && itemCost[cost.type] <= cost.max) {
        return true;
      }
    }
    return false;
  }
  return false;
}

function filterUnitList(list, filters: { age: AgeFilterTypesEnum, cost: any }): UnitModel[] {
  return list.filter(item => filters.age === AgeFilterTypesEnum.All || item.age === filters.age)
    .filter(item => filters.cost.length === 0 || filters.cost.map(costFilter => hasCost(item.cost, costFilter)).indexOf(false) === -1);

}

export function unitReducer(state: any, action: any): any {
  return _unitReducer(state, action);
}

