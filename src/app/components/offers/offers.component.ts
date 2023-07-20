import { Component, OnInit ,AfterViewInit} from '@angular/core';
import { Yeoman } from '@app/services/yeoman.service';
import { ScriptService } from '@app/services/script.service';
import { ScriptStore } from '@app/services/script.store';
import { SwiperOptions } from 'swiper';
import { TopComponent } from '../shared/top/top.component';
import { Router } from '@angular/router';
TopComponent
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements AfterViewInit {
  isActive: boolean = true;

  configOffer: SwiperOptions = {
    effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  spaceBetween: 0,
  slidesPerView:1.8,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
    
  },pagination: {
    el: ".swiper-pagination",
  },
  }; 

  constructor(
    public router:Router,
  public topComponent:TopComponent,
    public script:ScriptService,
    public yeoman:Yeoman
  ) {
   
    this.yeoman.virtualRoute="offers";
    
   }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {  
    this.yeoman.virtualRoute="offers";

console.log("SETED");
    //  this.yeoman.virtualRoute="offers";
    this.toggleCustomClass();
     this.yeoman.virtualRoute="offers";      
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
    toggleCustomClass() {
      // this.isActive = !this.isActive;
    }
}
