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
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements AfterViewInit {
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
  constructor(
    public yeoman:Yeoman, 
    public infofake:InfofakeService,
     public script:ScriptService,
    private router:Router

  ) {
    this.yeoman.categories=[]; 
    this.loadInfo("categories");
    

  }
  loadInfo(entity:string) {
    let ent=entity;
    this.infofake.loadInfofakeData()
      .subscribe((response: any) => {   
        console.log(response);  
        this.yeoman[ent] = response[ent];
     
      });
   }
  ngAfterViewInit(): void {
  
  }

}
