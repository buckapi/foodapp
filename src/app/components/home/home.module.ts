import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { InfofakeS } from '@app/services/infofake.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    HomeRoutingModule,
    NgxUsefulSwiperModule
  ],
  providers:[
    InfofakeS
  ]
})
export class HomeModule { }
