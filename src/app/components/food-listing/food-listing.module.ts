import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodListingRoutingModule } from './food-listing-routing.module';
import { FoodListingComponent } from './food-listing.component';

@NgModule({
  declarations: [
    FoodListingComponent
  ],
  imports: [
    CommonModule,
    FoodListingRoutingModule
  ]
})
export class FoodListingModule { }
