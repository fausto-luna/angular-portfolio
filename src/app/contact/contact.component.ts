import { Component, OnInit, Input} from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { MessageService } from '/Users/faustoluna/IT/02_Front-End/07_Angular/angular-portfolio/src/app/services/message.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  [x: string]: any;
  log(x) { console.log }
  

  @Input( ) deviceXs: boolean;

  mediaSub: Subscription;
  // deviceXs: boolean;
  constructor(public mediaObserver: MediaObserver, public _MessageService: MessageService) {

  }

  ngOnInit() {
    this.mediaSub = this.mediaObserver.media$.subscribe((res: MediaChange) => {
      console.log(res.mqAlias);
      this.deviceXs = res.mqAlias === "xs" ? true : false;
    })
  }

  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }

  contactForm(form) {
    let errors:number = 0;
    let i:number;
    let emailRegEx:RegExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    let phoneRegEx:RegExp = /(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/;
    for (i = 1; i < 6 ; i++){
      let input = <HTMLInputElement>document.getElementById('input' + i);
      console.log(input.value);
      if (input.name == "email" && !emailRegEx.test(input.value)){
        errors ++;
        console.log(input.name);
      }
      if (input.name == "phone" && !phoneRegEx.test(input.value)){
        errors ++;
        console.log(input.name);
      }
      if (input.value.length < 3){
        errors ++;
        console.log(errors);
      }
    }
    if (errors === 0){
      this._MessageService.sendMessage(form).subscribe(() => {
        Swal.fire("Contact Form", "Message sent!", 'success');
        });
    }else{
      Swal.fire("Contact Form", "Something is not good", 'error');
    }
  }
}
// https://angular.io/guide/form-validation
