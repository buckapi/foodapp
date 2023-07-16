import { Component ,OnInit,AfterViewInit} from '@angular/core';
import { ScriptService } from '@app/services/script.service';
import { ScriptStore } from '@app/services/script.store';
import { Yeoman } from '@app/services/yeoman.service';
import { SwiperOptions } from 'swiper';
import { Infofake } from '@app/services/infofake.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  constructor( 
    public yeoman:Yeoman, 
    public infofake:Infofake,
    public script:ScriptService) {
    
     }
     config: SwiperOptions = {
      a11y: { enabled: true },
      direction: 'horizontal',
      slidesPerView: 1,
      keyboard: true,
      mousewheel: false,
      scrollbar: false,
      pagination: true,
      autoplay: { delay: 2000 },
 
      spaceBetween: 5,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
    }; 
    config2: SwiperOptions = {
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
      
    config4: SwiperOptions = {
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
