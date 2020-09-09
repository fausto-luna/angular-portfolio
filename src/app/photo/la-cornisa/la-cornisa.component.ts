import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-la-cornisa',
  templateUrl: './la-cornisa.component.html',
  styleUrls: ['./la-cornisa.component.css']
})
export class LaCornisaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  numArr = Array.from(Array(21), (_,x) => x);
}
