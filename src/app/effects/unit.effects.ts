import {Injectable} from '@angular/core';
import {UnitService} from '../services/unit.service';
import {Store} from '@ngrx/store';
import {Actions, ofType, createEffect} from '@ngrx/effects';
import {catchError, map, mergeMap, shareReplay, tap} from 'rxjs/operators';
import {EMPTY} from 'rxjs';
import {getUnitDetail, getUnitList, getUnitListSuccess, setUnitDetail} from '../actions/unit.actions';


@Injectable()
export class UnitEffects {
  getUnitsRequestCache = this.unitService.getUnits();

  getUnits$ = createEffect(() => this.actions$.pipe(
    ofType(getUnitList),
    mergeMap((action) => this.getUnitsRequestCache
      .pipe(
        map(units => getUnitListSuccess({units})),
        catchError(() => EMPTY)
      ))
    )
  );

  getUnitDetails$ = createEffect(() => this.actions$.pipe(
    ofType(getUnitDetail),
    mergeMap((action) => this.getUnitsRequestCache
      .pipe(
        map(units => setUnitDetail({unit: units.find(unit => unit.id === action.unitId)})),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(private unitService: UnitService,
              private actions$: Actions) {
  }
}
