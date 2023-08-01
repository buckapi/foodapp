import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', redirectTo: '/home', pathMatch:'full'},
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  { path: 'offers', loadChildren: () => import('./components/offers/offers.module').then(m => m.OffersModule) },
  { path: 'categories', loadChildren: () => import('./components/all-categories/all-categories.module').then(m => m.AllCategoriesModule) },
  { path: 'foodListing', loadChildren: () => import('./components/food-listing/food-listing.module').then(m => m.FoodListingModule) },
   { path: 'kitchenListing', loadChildren: () => import('./components/kitchen-listing/kitchen-listing.module').then(m => m.KitchenListingModule) },
  { path: 'productDetail', loadChildren: () => import('./components/productDetail/product-detail.module').then(m => m.ProductDetailModule) },
  { path: 'addProduct', loadChildren: () => import('./components/addProduct/add-product.module').then(m => m.AddProductModule) },
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
