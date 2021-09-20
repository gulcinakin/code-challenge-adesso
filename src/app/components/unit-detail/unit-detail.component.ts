import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {UnitModel} from '../../models/unit.model';
import {Store} from '@ngrx/store';
import {selectUnit} from '../../selectors/unit.selector';
import {getUnitDetail} from '../../actions/unit.actions';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-unit-detail',
  templateUrl: './unit-detail.component.html',
  styleUrls: ['./unit-detail.component.scss']
})
export class UnitDetailComponent implements OnInit {
  unit: Observable<UnitModel> = this.store.select(selectUnit);
  id: any;

  constructor(private store: Store<{ units: { units: UnitModel[] } }>,
              private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.store.dispatch(getUnitDetail({unitId: parseInt(this.id, 10) }));
  }

}
