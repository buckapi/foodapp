import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllCategoriesRoutingModule } from './all-categories-routing.module';
import { AllCategoriesComponent } from './all-categories.component';


@NgModule({
  declarations: [
    AllCategoriesComponent
  ],
  imports: [
    CommonModule,
    AllCategoriesRoutingModule
  ]
})
export class AllCategoriesModule { }
