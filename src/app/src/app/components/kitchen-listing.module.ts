import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KitchenListingRoutingModule } from './kitchen-listing-routing.module';
import { KitchenListingComponent } from './kitchen-listing.component';


@NgModule({
  declarations: [
    KitchenListingComponent
  ],
  imports: [
    CommonModule,
    KitchenListingRoutingModule
  ]
})
export class KitchenListingModule { }
