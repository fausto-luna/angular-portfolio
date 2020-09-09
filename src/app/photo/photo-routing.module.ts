import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoComponent } from './photo.component';
import { LaCornisaComponent } from './la-cornisa/la-cornisa.component';
import { LastDayOnEarthComponent } from './last-day-on-earth/last-day-on-earth.component';
import { InstanteNoDecisivoComponent } from './instante-no-decisivo/instante-no-decisivo.component';
import { HighLandComponent } from './high-land/high-land.component';
import { FirstLightComponent } from './first-light/first-light.component';

const routes: Routes = [
    {
        path: 'photo',
        component: PhotoComponent,
        children: [
            {
                path: 'la-cornisa',
                component: LaCornisaComponent
            },
            {
                path: 'last-day-on-earth',
                component: LastDayOnEarthComponent,
                
            },
            {
                path: 'instante-no-decisivo',
                component: InstanteNoDecisivoComponent
            },
            {
                path: 'high-land',
                component: HighLandComponent
            },
            {
                path: 'instante-no-decisivo',
                component: HighLandComponent
            },
            {
                path: 'first-light',
                component: FirstLightComponent
            },
        ]
    }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotoRoutingModule { }