import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
//import { artModule } from './art/art.module';
//import { DevsModule } from './devs/devs.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

import { ArtComponent } from './art/art.component';
import { HeaderArtComponent } from './art/header-art/header-art.component';
import { LaCornisaComponent } from './art/la-cornisa/la-cornisa.component';
import { LastDayOnEarthComponent } from './art/last-day-on-earth/last-day-on-earth.component';
import { InstanteNoDecisivoComponent } from './art/instante-no-decisivo/instante-no-decisivo.component';
import { HighLandComponent } from './art/high-land/high-land.component';
import { LuzPrimeraComponent } from './art/luz-primera/luz-primera.component';
import { GrecDifusorComponent } from './art/grec-difusor/grec-difusor.component';
import { SpanishRevolutionComponent } from './art/spanish-revolution/spanish-revolution.component';
import { FacilMalditaNereaComponent } from './art/facil-maldita-nerea/facil-maldita-nerea.component';
import { FabricaDesitjosComponent } from './art/fabrica-desitjos/fabrica-desitjos.component';
import { UayBalamArtComponent } from './art/uay-balam-art/uay-balam-art.component';
import { MedievalWeddingComponent } from './art/medieval-wedding/medieval-wedding.component';
import { FoodPhotoComponent } from './art/food-photo/food-photo.component';


import { DevsComponent } from './devs/devs.component';
import { ThisWebComponent } from './devs/this-web/this-web.component';


import { RatingComponent } from './devs/rating/rating.component';
import { RocketsComponent } from './devs/rockets/rockets.component';
import { VehicleRegistrationComponent } from './devs/vehicle-registration/vehicle-registration.component';
import { ChuckComponent } from './devs/chuck/chuck.component';

import { HeaderDevsComponent } from './devs/header-devs/header-devs.component';
import { UaybalamComponent } from './devs/uaybalam/uaybalam.component';
import { ViokoComponent } from './devs/vioko/vioko.component';



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
    ArtComponent,
    LaCornisaComponent,
    HeaderArtComponent,
    LastDayOnEarthComponent,
    InstanteNoDecisivoComponent,
    HighLandComponent,
    LuzPrimeraComponent,
    GrecDifusorComponent,
    SpanishRevolutionComponent,
    FacilMalditaNereaComponent,
    FabricaDesitjosComponent,
    UayBalamArtComponent,
    MedievalWeddingComponent,
    FoodPhotoComponent,
    
    DevsComponent,
    ThisWebComponent,
    RatingComponent,
    RocketsComponent,
    VehicleRegistrationComponent,
    ChuckComponent,
    
    UaybalamComponent,
    ViokoComponent,
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
    NgbdDropdownBasic,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //artModule,
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
