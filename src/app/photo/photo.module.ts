import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { PhotoRoutingModule } from './photo-routing.module';

import { PhotoComponent } from './photo.component';
import { LaCornisaComponent } from './la-cornisa/la-cornisa.component';
import { HeaderPhotoComponent } from './header-photo/header-photo.component';
import { LastDayOnEarthComponent } from './last-day-on-earth/last-day-on-earth.component';
import { InstanteNoDecisivoComponent } from './instante-no-decisivo/instante-no-decisivo.component';
import { HighLandComponent } from './high-land/high-land.component';
import { FirstLightComponent } from './first-light/first-light.component';


@NgModule({
  declarations: [
    PhotoComponent,
    LaCornisaComponent,
    HeaderPhotoComponent,
    LastDayOnEarthComponent,
    InstanteNoDecisivoComponent,
    HighLandComponent,
    FirstLightComponent
  ],
  imports: [
    CommonModule
    // PhotoRoutingModule
  ]
})
export class PhotoModule { }
