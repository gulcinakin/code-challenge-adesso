import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {UnitModel} from './models/unit.model';
import {selectUnits} from './selectors/unit.selector';
import {Store} from '@ngrx/store';
import {getUnitList} from './actions/unit.actions';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'code-challenge-adesso';
}
