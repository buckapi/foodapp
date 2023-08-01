import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductDetailComponent } from './product-detail.component';
import { Yeoman } from '@app/services/yeoman.service';


@NgModule({
  declarations: [
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductDetailRoutingModule
  ],
  providers:[Yeoman]
})
export class ProductDetailModule { }
