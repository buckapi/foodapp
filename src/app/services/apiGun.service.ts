import { Injectable } from '@angular/core';
import Gun from 'gun'; // Asegúrate de tener la biblioteca Gun instalada en tu proyecto
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Suggestion } from '@app/interfaces/suggestion.interface';
import { Kitchen } from '@app/interfaces/kitchen.interface';

import { Yeoman } from './yeoman.service';

@Injectable({
  providedIn: 'root'
})
export class ApiGunService {
  private gun: any;

  constructor(
    public yeoman: Yeoman
    ) {
    this.gun = Gun(); 
    this.yeoman.banners=[];

    this.yeoman.brands=[];

    this.yeoman.offers=[];

    this.yeoman.categories=[];

    this.yeoman.top=[];
    this.yeoman.suggestions=[];

    // this.yeoman.banners=[];
    // this.loadAllEntities();
  }
  getEntityData(entity: string) {
    this.gun.get(entity).on((data: any) => {
      this.gun.get(entity).map().once((data: any, key: any) => {
        if (entity === "top") {
          const entityData: Kitchen = {
            name: data.name,
            price: data.price,
            images: data.images,
            off: data.off,
            upto: data.upto,
            foodItem: data.foodItem,
            reviews: data.reviews,
            place: data.place,
            distance: data.distance,
            time: data.time         
          };  
          this.yeoman[entity].push(entityData);
        } else {
          const entityData: Suggestion = {
            name: data.name,
            price: data.price,
            images: data.images
          };
          // Agregamos los datos de la entidad al array correspondiente en yeoman
          this.yeoman[entity].push(entityData);
          // console.log(`${entity}: ` + JSON.stringify(this.yeoman[entity], null, 2));
        }
      });
    });
  }

  loadAllEntities() {
    const entities = ['suggestions', 'brands', 'top', 'categories', 'banners','offers'];
    entities.forEach(entity => {
      this.getEntityData(entity);
    });
  }
}
