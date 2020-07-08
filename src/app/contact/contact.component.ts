import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  log(x) { console.log }
  constructor() { }

  ngOnInit(): void {
    
  }

}
// https://angular.io/guide/form-validation
