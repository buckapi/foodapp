import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KitchenListingRoutingModule } from './kitchen-listing-routing.module';
import { KitchenListingComponent } from './kitchen-listing.component';
import { TopComponent } from '../shared/top/top.component';
import { InfofakeService } from '@app/services/infofake.service';
import { Router,RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    KitchenListingComponent,
    
  ],
  imports: [
  
    HttpClientModule,
    RouterModule,
    CommonModule,
    KitchenListingRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers:[
    TopComponent,
    InfofakeService
  ]
})
export class KitchenListingModule { }
