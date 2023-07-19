import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { InfofakeService } from '@app/services/infofake.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule,
    HttpClientModule,
    CommonModule,
    HomeRoutingModule,
    NgxUsefulSwiperModule
  ],
  providers:[
    InfofakeService
  ]
})
export class HomeModule { }
