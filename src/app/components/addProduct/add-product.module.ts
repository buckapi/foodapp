import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddProductRoutingModule } from './add-product-routing.module';
import { AddProductComponent } from './add-product.component';
import { FilePickerModule } from  'ngx-awesome-uploader';

@NgModule({
  declarations: [
    AddProductComponent
  ],
  imports: [
    FilePickerModule,
    CommonModule,
    AddProductRoutingModule
  ]
})
export class AddProductModule { }
