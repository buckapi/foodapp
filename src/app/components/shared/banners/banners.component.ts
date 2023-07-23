import { Component, AfterViewInit } from '@angular/core';
import { ApiGunService } from '@app/services/apiGun.service';
import { InfofakeService } from '@app/services/infofake.service';
import { Yeoman } from '@app/services/yeoman.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.css']
})
export class BannersComponent implements AfterViewInit {
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

  constructor(
    public apiGunService:ApiGunService,
    public yeoman: Yeoman,
    public infofake: InfofakeService
  ) {
    this.yeoman.banners=[];
     this.apiGunService.getEntityData("banners");
    this.yeoman.banners = [];
    this.yeoman.brands = null;
    this.yeoman.evenBrands = [];
    this.yeoman.oddBrands = [];
    // this.loadInfo("banners");
    // this.yeoman.configBrands = this.configBrands;
  }

  loadInfo(entity: string) {
    // this.infofake.getData().subscribe((data: any) => {
    //   if (data && data[entity]) {
    //     this.yeoman[entity] = data[entity];
    //     console.log('Datos obtenidos:', data[entity]);
    //   } else {
    //     console.log('No se encontraron datos para la entidad', entity);
    //   }
    // });
  }

  ngAfterViewInit(): void {
  }

}
