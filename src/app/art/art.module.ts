import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { PhotoRoutingModule } from './photo-routing.module';

import { ArtComponent } from './art.component';
import { LaCornisaComponent } from './la-cornisa/la-cornisa.component';
import { HeaderArtComponent } from './header-art/header-art.component';
import { LastDayOnEarthComponent } from './last-day-on-earth/last-day-on-earth.component';
import { InstanteNoDecisivoComponent } from './instante-no-decisivo/instante-no-decisivo.component';
import { HighLandComponent } from './high-land/high-land.component';
import { FirstLightComponent } from './first-light/first-light.component';
import { GrecDifusorComponent } from './grec-difusor/grec-difusor.component';
import { SpanishRevolutionComponent } from './spanish-revolution/spanish-revolution.component';
import { FacilMalditaNereaComponent } from './facil-maldita-nerea/facil-maldita-nerea.component';
import { MedievalWeddingComponent } from './medieval-wedding/medieval-wedding.component';
import { FabricaDesitjosComponent } from './fabrica-desitjos/fabrica-desitjos.component';
import { UayBalamArtComponent } from './uay-balam-art/uay-balam-art.component';


@NgModule({
  declarations: [
    ArtComponent,
    LaCornisaComponent,
    HeaderArtComponent,
    LastDayOnEarthComponent,
    InstanteNoDecisivoComponent,
    HighLandComponent,
    FirstLightComponent,
    GrecDifusorComponent,
    SpanishRevolutionComponent,
    FacilMalditaNereaComponent,
    MedievalWeddingComponent,
    FabricaDesitjosComponent,
    UayBalamArtComponent
  ],
  imports: [
    CommonModule
    // PhotoRoutingModule
  ]
})
export class PhotoModule { }
