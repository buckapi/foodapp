import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffersRoutingModule } from './offers-routing.module';
import { OffersComponent } from './offers.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { SharedModule } from '../shared/shared.module';
import { TopComponent } from '../shared/top/top.component';
import { SuggestionsComponent } from '../shared/suggestions/suggestions.component';
import { Route, RouterModule } from '@angular/router';
import { BrandsComponent } from '../shared/brands/brands.component';
import { InfofakeService } from '@app/services/infofake.service';
import { ApiGunService } from '@app/services/apiGun.service';

@NgModule({
  declarations: [
    OffersComponent
  ],
  imports: [
    RouterModule,
    SharedModule,
    NgxUsefulSwiperModule,
    CommonModule,
    OffersRoutingModule
  ],
  providers:[
    TopComponent,
    BrandsComponent,
    SuggestionsComponent, 
    InfofakeService,
    ApiGunService
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OffersModule { }
