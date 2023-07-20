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

  title = 'Foodapp';
  constructor(
    public yeoman:Yeoman,
    public infofake:InfofakeService,
    public script:ScriptService
  ){
    // this.yeoman.brands=[];
// this.loadInfo("brands");
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
 
  loadInfo(entity:string) {
    let ent=entity;
    this.infofake.loadInfofakeData()
      .subscribe((response: any) => {     
        this.yeoman[ent] = response[ent];
      });
   }

  ngAfterViewInit(): void {
  // this.yeoman.configSuggestions=this.configSuggestions;
    //  this.loadInfo("suggestions");
    //  this.loadInfo("banners");
    //  this.loadInfo("offers");
    //  this.loadInfo("top");
    //  this.loadInfo("categories");
  }
}
