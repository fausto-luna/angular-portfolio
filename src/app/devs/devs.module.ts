import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevsRoutingModule } from './devs-routing.module';

import { DevsComponent } from './devs.component';

import { RatingComponent } from './rating/rating.component';
import { RocketsComponent } from './rockets/rockets.component';


import { VehicleRegistrationComponent } from './vehicle-registration/vehicle-registration.component';
import { ChuckComponent } from './chuck/chuck.component';
import { FoodMapComponent } from './food-map/food-map.component';
import { HeaderDevsComponent } from './header-devs/header-devs.component';
import { ThisWebComponent } from './this-web/this-web.component';
import { UaybalamComponent } from './uaybalam/uaybalam.component';
import { ViokoComponent } from './vioko/vioko.component';

@NgModule({
  declarations: [
    DevsComponent,
    HeaderDevsComponent,
    RatingComponent,
    RocketsComponent,
    VehicleRegistrationComponent,
    ChuckComponent,
    FoodMapComponent,
    ThisWebComponent,
    UaybalamComponent,
    ViokoComponent
  ],
  imports: [
    CommonModule,
    DevsRoutingModule
  ]
})
export class DevsModule { }
