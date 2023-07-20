import { Component ,AfterViewInit} from '@angular/core';
import { ScriptService } from '@app/services/script.service';
import { ScriptStore } from '@app/services/script.store';
import { SwiperOptions } from 'swiper';
// import { SharedComponent } from './components/shared/shared.component';
import { InfofakeService } from './services/infofake.service';
import { Yeoman } from './services/yeoman.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {
  configSuggestions = {
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
  title = 'vk';
  constructor(
public yeoman:Yeoman,
    public infofake:InfofakeService,
    public script:ScriptService
  ){
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
    config: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 4,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    pagination: true,
    spaceBetween: 5,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
  };  
  loadInfo(entity:string) {
    let ent=entity;
    this.infofake.loadInfofakeData()
      .subscribe((response: any) => {     
        this.yeoman[ent] = response[ent];
      });
   }

  ngAfterViewInit(): void {
  // this.yeoman.configSuggestions=this.configSuggestions;
     this.loadInfo("suggestions");
     this.loadInfo("banners");
     this.loadInfo("offers");
     this.loadInfo("top");
     this.loadInfo("categories");
  }
}
