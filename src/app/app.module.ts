import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { HeaderComponent } from './components/ui/header/header.component';
import { SidebarComponent } from './components/ui/sidebar/sidebar.component';
import { SearchComponent } from './components/ui/search/search.component';
import { NavbarComponent } from './components/ui/navbar/navbar.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { InfofakeService } from './services/infofake.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiGunService } from './services/apiGun.service';
// import { BrandsComponent } from './components/shared/brands/brands.component';
// import { TopComponent } from './components/shared/top/top.component';
// import { SharedModule } from './components/shared/shared.module';
 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    SearchComponent,
    NavbarComponent
    
  ],
  imports: [
    HttpClientModule,
     NgxUsefulSwiperModule,
    LazyLoadImageModule,
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    
  ],
  providers: [InfofakeService,ApiGunService],
  bootstrap: [AppComponent]
})
export class AppModule { }
