import { Component, OnInit ,AfterViewInit} from '@angular/core';
// import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { InfofakeService } from '@app/services/infofake.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { Yeoman } from '@app/services/yeoman.service';
import { ScriptService } from '@app/services/script.service';
import { ScriptStore } from '@app/services/script.store';
import { SwiperOptions } from 'swiper';
import { ApiGunService } from '@app/services/apiGun.service';
import { SharedPopupService } from '@app/services/sharedPopup.service';
@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements AfterViewInit {
  constructor(
    private sharedPopupService: SharedPopupService,
    public infofake:InfofakeService,
    public script:ScriptService,
    private router:Router,
    public apiGunService:ApiGunService,
    public yeoman:Yeoman
  ) {this.yeoman.suggestions=[];
     this.apiGunService.getEntityData("suggestions");
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
showPopup(index:any) {
  // this.sharedPopupService.togglePopup(true);console.log("preview: "+this.yeoman.suggestions[index])
  this.yeoman.preview=this.yeoman.suggestions[index];
  this.router.navigate(['/productDetail']);
}
  ngAfterViewInit(): void {
  }
  
}
