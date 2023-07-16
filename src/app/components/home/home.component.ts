import { Component ,OnInit,AfterViewInit,ChangeDetectorRef} from '@angular/core';
import { ScriptService } from '@app/services/script.service';
import { ScriptStore } from '@app/services/script.store';
import { Yeoman } from '@app/services/yeoman.service';
import { SwiperOptions } from 'swiper';
import { InfofakeService } from '@app/services/infofake.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements AfterViewInit {
  evenBrands: any[] = [];
  oddBrands: any[] = [];
  top:any=[];
  categories:any=[];
  suggestions:any=[];
  brands:any=[];
  banners:any=[];
  
  constructor( 
    private cdr: ChangeDetectorRef,
    public yeoman:Yeoman, 
    public infofake:InfofakeService,
    public script:ScriptService) {
     
      this.loadTop();
    
     }
     loadTop() {
      this.infofake.loadInfofakeData().subscribe((response: any) => {
        this.top = response.top || [];
        this.categories=response.categories|| [];  
        this.suggestions=response.suggestions|| [];
        this.brands=response.brands|| [];
        this.banners=response.banners|| [];
        this.splitBrands();
      });
     }
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
    configCategories: SwiperOptions = {
      a11y: { enabled: true },
      direction: 'horizontal',
      slidesPerView: 4,
      keyboard: true,
      mousewheel: false,
      scrollbar: false,
      autoplay: { delay: 2000 },
      pagination: false,
      spaceBetween: 5,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
    };  
    config3: SwiperOptions = {
      a11y: { enabled: true },
      direction: 'horizontal',
      slidesPerView: 2,
      keyboard: true,
      mousewheel: false,
      scrollbar: false,
       autoplay: { delay: 1000 },
      pagination: false,
      spaceBetween: 5,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
    }; 
      
    configBrands: SwiperOptions = {
      a11y: { enabled: true },
      direction: 'horizontal',
      slidesPerView: 4,
      keyboard: true,
      mousewheel: false,
      scrollbar: false,
       autoplay: { delay: 1500 },
      pagination: false,
      spaceBetween: 5,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
    };  

    splitBrands(): void {
      // Ordena alfabéticamente las marcas en el array this.infofake.brands
      this.brands.sort((a:any, b:any) => a.name.localeCompare(b.name));    
      // Filtra las marcas con índices pares y las asigna al array this.evenBrands
      this.evenBrands = this.brands.filter((_:any, index:any) => index % 2 === 0);    
      // Filtra las marcas con índices impares y las asigna al array this.oddBrands
      this.oddBrands = this.brands.filter((_:any, index:any) => index % 2 !== 0);
    }

     ngAfterViewInit(): void {  
      this.yeoman.virtualRoute="home";      
      this.script.load(  
      'bootstrap',
      'bundle',
      'swiper',
      'script'
      )
      .then(data => {
        
      })
      .catch(error => console.log(error));  
  }

}
