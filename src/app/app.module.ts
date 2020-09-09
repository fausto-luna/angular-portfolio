import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
//import { PhotoModule } from './photo/photo.module';
//import { DevsModule } from './devs/devs.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

import { PhotoComponent } from './photo/photo.component';
import { HeaderPhotoComponent } from './photo/header-photo/header-photo.component';
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
import { HeaderDevsComponent } from './devs/header-devs/header-devs.component';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdminModule } from './admin/admin.module';

import { ShopComponent } from './shop/shop.component';

import { NavbarMoonsComponent } from './header/navbar-moons/navbar-moons.component';
import { NavbrandComponent } from './header/navbrand/navbrand.component';
import { BlackmoonComponent } from './header/navbar-moons/blackmoon/blackmoon.component';
import { HalfmoonLeftblackComponent } from './header/navbar-moons/halfmoon-leftblack/halfmoon-leftblack.component';
import { FullmoonComponent } from './header/navbar-moons/fullmoon/fullmoon.component';
import { HalfmoonRightblackComponent } from './header/navbar-moons/halfmoon-rightblack/halfmoon-rightblack.component';
import { SunComponent } from './header/navbar-moons/sun/sun.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NgbdDropdownBasic } from './header/dropdown-basic/dropdown-basic.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PhotoComponent,
    LaCornisaComponent,
    HeaderPhotoComponent,
    LastDayOnEarthComponent,
    InstanteNoDecisivoComponent,
    HighLandComponent,
    FirstLightComponent,
    DevsComponent,
    RatingComponent,
    RocketsComponent,
    VehicleRegistrationComponent,
    ChuckComponent,
    FoodMapComponent,
    HeaderDevsComponent,
    AboutComponent,
    ContactComponent,
    ShopComponent,
    NavbarMoonsComponent,
    NavbrandComponent,
    BlackmoonComponent,
    HalfmoonLeftblackComponent,
    FullmoonComponent,
    HalfmoonRightblackComponent,
    SunComponent,
    NgbdDropdownBasic
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //PhotoModule,
    //DevsModule,
    AdminModule,
    FormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    AppRoutingModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
