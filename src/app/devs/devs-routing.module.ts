
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevsComponent } from './devs.component';

import { RatingComponent } from './rating/rating.component';
import { RocketsComponent } from './rockets/rockets.component';


import { VehicleRegistrationComponent } from './vehicle-registration/vehicle-registration.component';
import { ChuckComponent } from './chuck/chuck.component';
import { FoodMapComponent } from './food-map/food-map.component';

const routes: Routes = [
    {
        path: 'devs',
        component: DevsComponent,
        children: [
            {
                path: 'rating-html-css-js',
                component: RatingComponent
            },
            {
                path: 'rockets',
                component: RocketsComponent
            },
            {
                path: 'vehicle-registration',
                component: VehicleRegistrationComponent
            },
            {
                path: 'chuck-norris-jokes',
                component: ChuckComponent
            },
            {
                path: 'food-map',
                component: FoodMapComponent 
            }
        ]
    }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevsRoutingModule { }