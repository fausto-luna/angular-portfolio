import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instante-no-decisivo',
  templateUrl: './instante-no-decisivo.component.html',
  styleUrls: ['./instante-no-decisivo.component.css']
})
export class InstanteNoDecisivoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  numArr = Array.from(Array(81), (_,x) => x);
}
