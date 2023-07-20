import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopComponent } from './top/top.component';

import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { InfofakeService } from '@app/services/infofake.service';
import { Yeoman } from '@app/services/yeoman.service';
import { BrandsComponent } from './brands/brands.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { CategoriesComponent } from './categories/categories.component';


@NgModule({
  declarations: [TopComponent, BrandsComponent, SuggestionsComponent, CategoriesComponent],
  imports: [
    CommonModule,
    
    NgxUsefulSwiperModule
  ],
  exports:[
    TopComponent,
    BrandsComponent,
    SuggestionsComponent,
    CategoriesComponent
  ],
  providers: [Yeoman,InfofakeService],
})
export class SharedModule { }
