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
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements AfterViewInit {
 
  constructor(
    public yeoman:Yeoman, 
    public infofake:InfofakeService,
     public script:ScriptService,
    private router:Router

  ) {
    this.loadScripts();
    this.yeoman.suggestions=[];
    this.loadInfo("suggestions");
   }
  loadInfo(entity:string) {
    let ent=entity;
    this.infofake.loadInfofakeData()
      .subscribe((response: any) => {   
        console.log(response);  
        this.yeoman[ent] = response[ent];
        
      });
   }
loadScripts(){
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
  ngAfterViewInit(): void {
     
  }

}
