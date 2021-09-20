import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-slider-range',
  templateUrl: './slider-range.component.html',
  styleUrls: ['./slider-range.component.scss']
})
export class SliderRangeComponent implements OnInit {

  @Input() startValue = 0;
  @Input() finishValue = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
