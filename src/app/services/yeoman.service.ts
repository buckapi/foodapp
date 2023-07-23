import { Injectable } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Injectable({
  providedIn: 'root'
})
export class Yeoman {
  loaded: any = false;

  configOptions: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  };

  configBanner: SwiperOptions = {
    ...this.configOptions,
    slidesPerView: 1,
    pagination: true,
    autoplay: { delay: 4000 },
    spaceBetween: 5
  };

  configBrands: SwiperOptions = {
    ...this.configOptions,
    slidesPerView: 3,
    pagination: false,
    autoplay: { delay: 300 },
    spaceBetween: 3
  };

  configSuggestions: SwiperOptions = {
    ...this.configOptions,
    slidesPerView: 2,
    pagination: false,
    autoplay: { delay: 1000 },
    spaceBetween: 5
  };

  [key: string]: any;
  virtualRoute: any = "home";
  pop: Boolean = false;
  data: any = {};
  dataF: any = {};
  products: any = {};
  top: any = [];
  brands: any = [null];
  suggestions: any = [];
  offers: any = [];
  categories: any = [];
  banners: any = [];
  evenBrands: any = [];
  oddBrands: any = [];
  // products:any[]=[];
  currency: number = 1;
  config: {
    clientSelected: number;
  } = { clientSelected: -1 };

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
