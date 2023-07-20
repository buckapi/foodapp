import { Component ,OnInit,AfterViewInit,ChangeDetectorRef} from '@angular/core';
import { ScriptService } from '@app/services/script.service';
import { ScriptStore } from '@app/services/script.store';
import { Yeoman } from '@app/services/yeoman.service';
import { SwiperOptions } from 'swiper';
import { InfofakeService } from '@app/services/infofake.service';
import { Router } from '@angular/router';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { TopComponent } from '../shared/top/top.component';

// import { TopComponent } from '../shared/top/top.component';
// import { TopComponent } from '../shared/top/top.component';

// import { SharedComponent } from '../shared/shared.component';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BrandsComponent } from '../shared/brands/brands.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements AfterViewInit {
  yeomanTop$: Observable<any> | undefined; // Inicializar como undefined

  evenBrands: any[] = [];
  oddBrands: any[] = [];
  top:any=[];
  categories:any=[];
  suggestions:any=[];
  brands:any=[];
  banners:any=[];
  
  constructor( 
    public topComponent:TopComponent,
    public brandsComponent:BrandsComponent,
    // public sharedComponent:SharedComponent,
    private cdr: ChangeDetectorRef,
    public yeoman:Yeoman, 
    public infofake:InfofakeService,
    public script:ScriptService,
    private router:Router
    ) {
     
      // this.sharedComponent.loadTop();
    
     }
    //  loadTop() {
    //   this.infofake.loadInfofakeData().subscribe((response: any) => {
    //     this.yeoman.top = response.top || [];
    //     this.yeoman.categories=response.categories|| [];  
    //     this.yeoman.suggestions=response.suggestions|| [];
    //     this.yeoman.brands=response.brands|| [];
    //     this.yeoman.banners=response.banners|| [];
    //     this.splitBrands();
    //   });
    //  }
    //  loadTopAlt() {
    //   this.infofake.loadInfofakeData().subscribe((response: any) => {
    //     // Acceder solo a la propiedad data.brands
    //     this.yeoman.brands = response?.data?.brands || [];
    
    //     // Resto del código...
    //     this.yeoman.top = response?.top || [];
    //     this.yeoman.categories = response?.categories || [];
    //     this.yeoman.suggestions = response?.suggestions || [];
    //     this.yeoman.banners = response?.banners || [];
    //     this.splitBrands();
    //   });
    // }
    
     configBanner: SwiperOptions = {
      a11y: { enabled: true },
      direction: 'horizontal',
      slidesPerView: 1,
      keyboard: true,
      mousewheel: false,
      scrollbar: false,
      pagination: true,
      autoplay: { delay: 4000 },
 
      spaceBetween: 5,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
    }; 
   

      
  

  
  
     ngAfterViewInit(): void {  
      this.yeomanTop$ = this.infofake.loadInfofakeData().pipe(
        tap((response: any) => {
          // console.log("HOAAAA" +response)
          this.yeoman.top=response.top;
          // Resto del código...
        })
      );


      this.yeoman.virtualRoute="home";      
      // this.script.load(  
      // 'bootstrap',
      // 'bundle',
      // 'swiper',
      // 'script'
      // )
      // .then(data => {
        
      // })
      // .catch(error => console.log(error));  
  }

}
