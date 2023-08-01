import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KitchenListingComponent } from './kitchen-listing.component';

const routes: Routes = [{ path: '', component: KitchenListingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KitchenListingRoutingModule { }
