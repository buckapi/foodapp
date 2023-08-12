import { Component, OnInit ,AfterViewInit} from '@angular/core';

import { InfofakeService } from '@app/services/infofake.service';

import { Router, RouterModule } from '@angular/router';
import { Yeoman } from '@app/services/yeoman.service';

import { ChangeDetectorRef } from '@angular/core';
import { ApiGunService } from '@app/services/apiGun.service';
import Gun from 'gun/gun';
import 'gun/sea';
@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements AfterViewInit {
  private gunInstance: any;
  top:any=[];
  constructor(
    public apiGunService:ApiGunService,
    private cdr: ChangeDetectorRef,
    public yeoman:Yeoman, 
    public infofake:InfofakeService,
    private router:Router
  ) {
    this.yeoman.top=[];
   this.apiGunService.getEntityData("top")
 
    this.eliminarDuplicados(this.yeoman.top,'name');
  }
  
  eliminarDuplicados<T extends Record<string, any>>(array: T[], atributo: keyof T): T[] {
    const elementosVistos: { [key: string]: boolean } = {};
    const resultado: T[] = [];

    for (const elemento of array) {
      const elementoKey = String(elemento[atributo]);
      if (!elementosVistos[elementoKey]) {
        resultado.push(elemento);
        console.log("dato: "+elemento);
        elementosVistos[elementoKey] = true;
      }
    }

    return resultado;
  }

    ngAfterViewInit(): void {

    // this.eliminarDuplicados(this.yeoman.top,'name');
      // this.apiGunService.getEntityData("top");

      // Accede a las suggestions desde el servicio Yeoman
      this.top = this.yeoman.top;
      this.eliminarDuplicados(this.yeoman.top,'name');
      console.log("HEY: "+this.yeoman.top); // Muestra los datos de las suggestions en la consola
  
  }
}
