import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ShopComponent } from './shop/shop.component';

import { ArtComponent } from './art/art.component';
import { LaCornisaComponent } from './art/la-cornisa/la-cornisa.component';
import { LastDayOnEarthComponent } from './art/last-day-on-earth/last-day-on-earth.component';
import { InstanteNoDecisivoComponent } from './art/instante-no-decisivo/instante-no-decisivo.component';
import { HighLandComponent } from './art/high-land/high-land.component';
import { FirstLightComponent } from './art/first-light/first-light.component';
import { GrecDifusorComponent } from './art/grec-difusor/grec-difusor.component';
import { SpanishRevolutionComponent } from './art/spanish-revolution/spanish-revolution.component';
import { FacilMalditaNereaComponent } from './art/facil-maldita-nerea/facil-maldita-nerea.component';
import { FabricaDesitjosComponent } from './art/fabrica-desitjos/fabrica-desitjos.component';
import { UayBalamArtComponent } from './art/uay-balam-art/uay-balam-art.component';
import { MedievalWeddingComponent } from './art/medieval-wedding/medieval-wedding.component';
import { FoodPhotoComponent } from './art/food-photo/food-photo.component';


import { DevsComponent } from './devs/devs.component';
import { RatingComponent } from './devs/rating/rating.component';
import { RocketsComponent } from './devs/rockets/rockets.component';
import { VehicleRegistrationComponent } from './devs/vehicle-registration/vehicle-registration.component';
import { ChuckComponent } from './devs/chuck/chuck.component';
import { FoodMapComponent } from './devs/food-map/food-map.component';
import { ThisWebComponent } from './devs/this-web/this-web.component';
import { UaybalamComponent } from './devs/uaybalam/uaybalam.component';
import { ViokoComponent } from './devs/vioko/vioko.component';




const routes: Routes = [
  { path: '', component: HomeComponent, data: {animation: 'HomePage'} },
  { path: 'home', redirectTo: '/', pathMatch: 'full' },
  { path: 'devs', component: DevsComponent, data: {animation: 'DevsPage'} },
  { path: 'devs/rating-html-css-js', component: RatingComponent },
  { path: 'devs/rockets', component: RocketsComponent },
  { path: 'devs/vehicle-registration', component: VehicleRegistrationComponent },
  { path: 'devs/chuck-norris-jokes', component: ChuckComponent },
  { path: 'devs/food-map', component: FoodMapComponent },
  { path: 'devs/this-web', component: ThisWebComponent },
  { path: 'devs/uaybalam', component: UaybalamComponent },
  { path: 'devs/vioko',  component: ViokoComponent },
  { path: 'art', component: ArtComponent, data: { animation: 'artPage' } },
  { path: 'art/la-cornisa', component: LaCornisaComponent },
  { path: 'art/last-day-on-earth', component: LastDayOnEarthComponent },
  { path: 'art/instante-no-decisivo', component: InstanteNoDecisivoComponent },
  { path: 'art/high-land', component: HighLandComponent },
  { path: 'art/instante-no-decisivo', component: HighLandComponent },
  { path: 'art/luz-primera', component: FirstLightComponent },
  { path: 'art/grec-difusor',  component: GrecDifusorComponent },
  { path: 'art/spanish-revolution', component: SpanishRevolutionComponent },
  { path: 'art/facil-maldita-nerea', component: FacilMalditaNereaComponent },
  { path: 'art/fabrica-desitjos', component: FabricaDesitjosComponent },
  { path: 'art/uay-balam-art', component: UayBalamArtComponent },
  { path: 'art/medieval-wedding', component: MedievalWeddingComponent },
  { path: 'art/food-photography', component: FoodPhotoComponent },
  { path: 'about', component: AboutComponent, data: { animation: 'AboutPage'} },
  { path: 'contact', component: ContactComponent, data: { animation: 'ContactPage' } },
  { path: 'shop', component: ShopComponent, data: { animation: 'ShopPage' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
