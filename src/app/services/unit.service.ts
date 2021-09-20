import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {map, shareReplay} from 'rxjs/operators';
import {UnitModel} from '../models/unit.model';

@Injectable({
  providedIn: 'root'
})
export class UnitService {
  constructor(private http: HttpClient) {
  }

  getUnits(): Observable<UnitModel[]> {
    return this.http.get<{ units: UnitModel[] }>('assets/data/age_of_empires_units.json').pipe(
      map(data => data.units),
      shareReplay(1)
    );
  }
}
