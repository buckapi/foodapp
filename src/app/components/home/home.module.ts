import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { InfofakeService } from '@app/services/infofake.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { TopComponent } from '../shared/top/top.component';
import { SharedModule } from '../shared/shared.module';
import { SuggestionsComponent } from '../shared/suggestions/suggestions.component';
import { CategoriesComponent } from '../shared/categories/categories.component';
import { BannersComponent } from '../shared/banners/banners.component';
import { ApiGunService } from '@app/services/apiGun.service';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    SharedModule,
    NgxUsefulSwiperModule,
    RouterModule,
    HttpClientModule,
    CommonModule,
    HomeRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers:[
    BannersComponent,
  
    TopComponent,
    SuggestionsComponent,
    CategoriesComponent,
    InfofakeService,
    ApiGunService
  ]
})
export class HomeModule { }
