import { Injectable } from '@angular/core';
import { SwiperOptions } from 'swiper';
@Injectable({
  providedIn: 'root'
})

export class Yeoman {
 

  configSuggestions: SwiperOptions = {
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



  [key: string]: any;
    virtualRoute:any="home";
    pop:Boolean=false;
    data:any={};
    products:any={};
    top:any=[];
    brands:any=[];
    suggestions:any=[];
    categories:any=[];
    banners:any=[];
    evenBrands:any=[];
    oddBrands:any=[];
    // products:any[]=[];
    currency:number=1;
    config: {
      clientSelected:number;
    } = {clientSelected:-1} ;
    origin: {
      name: string;
      restUrl: string;
      GQLUrl: string;
    } = {
      name: "default",
      restUrl: "<origin rest url>",
      GQLUrl: "<origin GQL url>",
    };
    constructor() {}
}