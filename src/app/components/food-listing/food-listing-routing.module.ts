import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodListingComponent } from './food-listing.component';

const routes: Routes = [{ path: '', component: FoodListingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodListingRoutingModule { }
