import {Component, DoCheck, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {UnitModel} from '../../models/unit.model';
import {Observable} from 'rxjs';
import {
  selectAgeFilter,
  selectCostFoodFilter,
  selectCostGoldFilter,
  selectCostWoodFilter,
  selectUnits
} from '../../selectors/unit.selector';
import {
  addCostFilter,
  changeAgeFilter,
  changeCostFilterMaxValue,
  changeCostFilterMinValue, getUnitDetail,
  getUnitList,
  removeCostFilter
} from '../../actions/unit.actions';
import {Options} from '@angular-slider/ngx-slider';
import {AgeFilterTypesEnum} from '../../enums/age-filter-types.enum';
import {CostFilterModel} from '../../models/cost-filter.model';
import {CostFilterTypesEnum} from '../../enums/cost-filter-types.enum';
import {CostValueTypesEnum} from '../../enums/cost-value-types.enum';
import {Router} from '@angular/router';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent implements OnInit {
  units: Observable<UnitModel[]> = this.store.select(selectUnits);
  selectedAgeFilter: Observable<AgeFilterTypesEnum> = this.store.select(selectAgeFilter);
  selectedCostFoodFilter: Observable<CostFilterModel> = this.store.select(selectCostFoodFilter);
  selectedCostWoodFilter: Observable<CostFilterModel> = this.store.select(selectCostWoodFilter);
  selectedCostGoldFilter: Observable<CostFilterModel> = this.store.select(selectCostGoldFilter);
  AgeFilterTypesEnum = AgeFilterTypesEnum;
  CostFilterTypesEnum = CostFilterTypesEnum;
  CostValueTypesEnum = CostValueTypesEnum;

  options: Options = {
    floor: 0,
    ceil: 200
  };

  constructor(private store: Store<{ units: { units: UnitModel[] } }>) {
  }

  ngOnInit(): void {
    this.store.dispatch(getUnitList());
  }

  toggleCostFilter(costFilterType: CostFilterTypesEnum, $event): void {
    if ($event.target.checked === true) {
      this.store.dispatch(addCostFilter({costFilterType}));
    }
    if ($event.target.checked === false) {
      this.store.dispatch(removeCostFilter({costFilterType}));
    }
  }

  changeAgeFilter(ageFilter: AgeFilterTypesEnum): void {
    this.store.dispatch(changeAgeFilter({ageFilter}));
  }

  changeCostRangeFilter(costFilterValue: number, costFilterType: CostFilterTypesEnum, costValueType: CostValueTypesEnum): void {
    if (costValueType === this.CostValueTypesEnum.min) {
      this.store.dispatch(changeCostFilterMinValue({costFilterMinValue: costFilterValue, costFilterType}));
    }
    if (costValueType === this.CostValueTypesEnum.max) {
      this.store.dispatch(changeCostFilterMaxValue({costFilterMaxValue: costFilterValue, costFilterType}));
    }
  }

}
