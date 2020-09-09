import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ShopComponent } from './shop/shop.component';

import { PhotoComponent } from './photo/photo.component';
import { LaCornisaComponent } from './photo/la-cornisa/la-cornisa.component';
import { LastDayOnEarthComponent } from './photo/last-day-on-earth/last-day-on-earth.component';
import { InstanteNoDecisivoComponent } from './photo/instante-no-decisivo/instante-no-decisivo.component';
import { HighLandComponent } from './photo/high-land/high-land.component';
import { FirstLightComponent } from './photo/first-light/first-light.component';

import { DevsComponent } from './devs/devs.component';
import { RatingComponent } from './devs/rating/rating.component';
import { RocketsComponent } from './devs/rockets/rockets.component';
import { VehicleRegistrationComponent } from './devs/vehicle-registration/vehicle-registration.component';
import { ChuckComponent } from './devs/chuck/chuck.component';
import { FoodMapComponent } from './devs/food-map/food-map.component';
import { ThisWebComponent } from './devs/this-web/this-web.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: {animation: 'HomePage'} },
  { path: 'home', redirectTo: '/', pathMatch: 'full' },
  { path: 'devs', component: DevsComponent, data: {animation: 'DevsPage'} },
  { path: 'devs/rating-html-css-js', component: RatingComponent },
  { path: 'devs/rockets', component: RocketsComponent },
  { path: 'devs/vehicle-registration', component: VehicleRegistrationComponent },
  { path: 'devs/chuck-norris-jokes',
    component: ChuckComponent },
  {
    path: 'devs/food-map',
    component: FoodMapComponent
  },
  {
    path: 'devs/this-web',
    component: ThisWebComponent
  },
  {
    path: 'photo',
    component: PhotoComponent,
    data: { animation: 'PhotoPage' }
  },
  {
    path: 'photo/la-cornisa',
    component: LaCornisaComponent
  },
  {
    path: 'photo/last-day-on-earth',
    component: LastDayOnEarthComponent
  },
  {
    path: 'photo/instante-no-decisivo',
    component: InstanteNoDecisivoComponent
  },
  {
    path: 'photo/high-land',
    component: HighLandComponent
  },
  {
    path: 'photo/instante-no-decisivo',
    component: HighLandComponent
  },
  {
    path: 'photo/first-light',
    component: FirstLightComponent
  },
  {
    path: 'about',
    component: AboutComponent, data: { animation: 'AboutPage'}
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { animation: 'ContactPage' }
  },
  {
    path: 'shop',
    component: ShopComponent,
    data: { animation: 'ShopPage' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
