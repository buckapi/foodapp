import { Component, OnInit ,AfterViewInit} from '@angular/core';
// import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { InfofakeService } from '@app/services/infofake.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { Yeoman } from '@app/services/yeoman.service';
import { ScriptService } from '@app/services/script.service';
import { ScriptStore } from '@app/services/script.store';
import { SwiperOptions } from 'swiper';
@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements AfterViewInit {
  configBrands: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 4,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
     autoplay: { delay: 400 },
    pagination: false,
    spaceBetween: 4,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
  };
  constructor(  
   // private cdr: ChangeDetectorRef,
  public yeoman:Yeoman, 
  public infofake:InfofakeService,
   public script:ScriptService,
  private router:Router
  ) {
    // this.yeoman.configBrands={};
    // this.yeoman.configBrands=this.configBrands;
    this.yeoman.evenBrands=[];
    this.yeoman.brands=[];
   
    this.yeoman.oddBrands=[];
    // this.yeoman.configBrands={};
    this.yeoman.configBrands = this.configBrands;
    // this.loadInfo("brands") desactivado
   
    
    
   }

  loadInfo(entity:string) {
    // this.yeoman.loaded=true;
    // let ent=entity;
    // this.infofake.loadInfofakeData()
    //   .subscribe((response: any) => {   
    //     console.log(response);  
    //     this.yeoman[ent] = response[ent];
    //     this.splitBrands();
    //   });
   }

  
  

    
      ngAfterViewInit(): void {
    
    // this.splitBrands();
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
  
  splitBrands(): void {
    // Ordena alfabéticamente las marcas en el array this.infofake.brands
    this.yeoman.brands.sort((a:any, b:any) => a.name.localeCompare(b.name));  
      
    // Filtra las marcas con índices pares y las asigna al array this.evenBrands
    this.yeoman.evenBrands = this.yeoman.brands.filter((_:any, index:any) => index % 2 === 0);    
    // Filtra las marcas con índices impares y las asigna al array this.oddBrands
    this.yeoman.oddBrands = this.yeoman.brands.filter((_:any, index:any) => index % 2 !== 0);
    // this.yeoman.brands=[];
    
  }

}
