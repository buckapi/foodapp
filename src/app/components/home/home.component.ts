import { Component ,OnInit,AfterViewInit,ChangeDetectorRef} from '@angular/core';
import { ScriptService } from '@app/services/script.service';
import { ScriptStore } from '@app/services/script.store';
import { Yeoman } from '@app/services/yeoman.service';
import { SwiperOptions } from 'swiper';
import { InfofakeService } from '@app/services/infofake.service';
import { Router } from '@angular/router';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { TopComponent } from '../shared/top/top.component';
import { BannersComponent } from '../shared/banners/banners.component';
// import { TopComponent } from '../shared/top/top.component';
// import { TopComponent } from '../shared/top/top.component';

// import { SharedComponent } from '../shared/shared.component';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements AfterViewInit {
  loaded:any=false;
  top:any=[];
  categories:any=[];
  suggestions:any=[];
  banners:any=[];
  
  constructor( 
    public bannersComponent:BannersComponent,
    public topComponent:TopComponent,
    private cdr: ChangeDetectorRef,
    public yeoman:Yeoman, 
    public infofake:InfofakeService,
    public script:ScriptService,
    private router:Router
    ) {
      this.loadInfo("brands")
     }
     splitBrands(): void {
      // Ordena alfabéticamente las marcas en el array this.infofake.brands
      this.yeoman.brands.sort((a:any, b:any) => a.name.localeCompare(b.name));  
        
      // Filtra las marcas con índices pares y las asigna al array this.evenBrands
      this.yeoman.evenBrands = this.yeoman.brands.filter((_:any, index:any) => index % 2 === 0);    
      // Filtra las marcas con índices impares y las asigna al array this.oddBrands
      this.yeoman.oddBrands = this.yeoman.brands.filter((_:any, index:any) => index % 2 !== 0);
      // this.yeoman.brands=[];
      
    }
     loadInfo(entity:string) {
      this.yeoman.loaded=true;
      let ent=entity;
      this.infofake.loadInfofakeData()
        .subscribe((response: any) => {   
          console.log(response);  
          this.yeoman[ent] = response[ent];
          this.splitBrands();
        });
     }
     ngAfterViewInit(): void {  
   
  }

}
