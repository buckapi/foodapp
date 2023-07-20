import { Component, OnInit ,AfterViewInit} from '@angular/core';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { InfofakeService } from '@app/services/infofake.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { Yeoman } from '@app/services/yeoman.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements AfterViewInit {
  yeomanTop$: Observable<any> | undefined; // Inicializar como undefined

  constructor(
    private cdr: ChangeDetectorRef,
    public yeoman:Yeoman, 
    public infofake:InfofakeService,
    private router:Router
  ) {}

  loadInfo(entity:string) {
    let ent=entity;
    this.infofake.loadInfofakeData()
      .subscribe((response: any) => {   
        console.log(response);  
        this.yeoman[ent] = response[ent];
      });
   }

    ngAfterViewInit(): void {
      this.loadInfo("top");
  }
}
