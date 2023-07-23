import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopComponent } from './top/top.component';

import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { InfofakeService } from '@app/services/infofake.service';

import { Yeoman } from '@app/services/yeoman.service';
import { BrandsComponent } from './brands/brands.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { CategoriesComponent } from './categories/categories.component';
import { BannersComponent } from './banners/banners.component';
import { Router, RouterModule } from '@angular/router';
import { ApiGunService } from '@app/services/apiGun.service';

@NgModule({
  declarations: [
    TopComponent, 
    BrandsComponent, 
    SuggestionsComponent, 
    CategoriesComponent, 
    BannersComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    NgxUsefulSwiperModule
  ],
  exports:[
    TopComponent,
    BrandsComponent,
    SuggestionsComponent,
    CategoriesComponent,
    BannersComponent
  ],
  providers: [Yeoman,InfofakeService,ApiGunService],
})
export class SharedModule { }
