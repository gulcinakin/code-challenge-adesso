import {Component, OnInit} from '@angular/core';
import {getUnitList} from '../../actions/unit.actions';
import {Observable} from 'rxjs';
import {UnitModel} from '../../models/unit.model';
import {selectUnits} from '../../selectors/unit.selector';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent {

}
