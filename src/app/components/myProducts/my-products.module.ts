import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyProductsRoutingModule } from './my-products-routing.module';
import { MyProductsComponent } from './my-products.component';


@NgModule({
  declarations: [
    MyProductsComponent
  ],
  imports: [
    CommonModule,
    MyProductsRoutingModule
  ]
})
export class MyProductsModule { }
