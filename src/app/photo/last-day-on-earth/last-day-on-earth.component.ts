import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-last-day-on-earth',
  templateUrl: './last-day-on-earth.component.html',
  styleUrls: ['./last-day-on-earth.component.css']
})
export class LastDayOnEarthComponent implements OnInit {
  @Input() deviceXs: boolean;
  @Input() deviceSm: boolean;
  @Input() deviceMd: boolean;
  @Input() deviceLg: boolean;
  @Input() deviceXl: boolean;
  constructor() { }

  ngOnInit(): void {
  }
  numArr = Array.from(Array(12), (_,x) => x);
}
