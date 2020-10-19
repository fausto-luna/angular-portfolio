import { Component, OnInit, Input } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-instante-no-decisivo',
  templateUrl: './instante-no-decisivo.component.html',
  styleUrls: ['./instante-no-decisivo.component.css']
})
export class InstanteNoDecisivoComponent implements OnInit {

  @Input( ) deviceXs: boolean;

  mediaSub: Subscription;
  // deviceXs: boolean;
  constructor(public mediaObserver: MediaObserver) {

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
  numArr = Array.from(Array(74), (_,x) => x);
}
