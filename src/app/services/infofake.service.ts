import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import Gun from 'gun/gun';
import 'gun/sea';
import { Yeoman } from './yeoman.service';
import { ApiGunService } from './apiGun.service';

interface FakeInfo {
  name: string;
  price: number;
  images: string | string[];
}

interface InfoResponse {
  offers: FakeInfo[];
  banners: FakeInfo[];
  suggestions: FakeInfo[];
  categories: FakeInfo[];
  brands: FakeInfo[];
  top: FakeInfo[];
}

@Injectable({
  providedIn: 'root'
})
export class InfofakeService {
  private gunInstance: any;
  
  constructor(
    public apiGunService:ApiGunService,
    private http: HttpClient,
    public yeoman:Yeoman  ) 
    {
    this.gunInstance = Gun();
    this.loadData();
  }

  saveData(data: any, entity: string) {
    const dataRef = this.gunInstance.get(entity);
  
    // Función recursiva para convertir arrays a objetos con claves únicas
    const convertArraysToPrimitives = (obj: any) => {
      for (const prop in obj) {
        if (Array.isArray(obj[prop]) && obj[prop].length > 0) {
          if (prop === 'images') {
            obj[prop] = obj[prop][0]; // Convertir el array a un valor primitivo (primer elemento)
          } else {
            const arrayObj: any = {};
            obj[prop].forEach((item: any, index: number) => {
              arrayObj[`${prop}_${index}`] = item;
            });
            obj[prop] = arrayObj;
          }
        } else if (typeof obj[prop] === 'object') {
          convertArraysToPrimitives(obj[prop]);
        }
      }
    }
  
    // Convertir arrays a objetos con claves únicas en el objeto de datos
    convertArraysToPrimitives(data);
  
    console.log(`Datos de "${entity}" a guardar en Gun.js:`, data);
  
    dataRef.put(data, (ack: any) => {
      if (ack.err) {
        console.error(`Error al guardar los datos de "${entity}" en Gun.js:`, ack.err);
      } else {
        console.log(`Datos de "${entity}" guardados correctamente en Gun.js:`, ack);
      }
    });
     this.apiGunService.loadAllEntities();
  }

  getData(): Observable<any> {
    const dataRef = this.gunInstance.get('data');
    return new Observable<any>((observer) => {
      dataRef.on((data: any) => {
        console.log('Datos recibidos desde Gun.js:', data);
        observer.next(data);   
      });
    });
  }
  
  loadData() {
    const entities = ['top', 'offers', 'categories', 'suggestions', 'brands', 'banners'];

    entities.forEach(entity => {
      const dataRef = this.gunInstance.get(entity);
      dataRef.once((data: any) => {
        if (!data) {
          this.loadInfofakeData(entity).subscribe(
            (fakeData: any) => {
              console.log(`Datos de "${entity}" cargados desde el archivo y guardados en Gun.js:`, fakeData);
              const convertedData = this.convertArraysToObjects(fakeData); // Convertir arrays a objetos
              this.saveData(convertedData, entity); // Guardar los datos en Gun.js
            },
            (error: any) => {
              console.error(`Error al cargar los datos de "${entity}" desde el archivo:`, error);
            }
          );
        } else {
          console.log(`Datos de "${entity}" ya presentes en Gun.js:`, data);
          // Aquí asignamos los datos a yeoman.data según el tipo de entidad
          switch (entity) {
            case 'top':
              this.yeoman.data.top = Object.values(data);
              break;
            case 'offers':
              this.yeoman.data.offers = Object.values(data);
              break;
            case 'categories':
              this.yeoman.data.categories = Object.values(data);
              break;
            case 'suggestions':
              this.yeoman.data.suggestions = Object.values(data);
              break;
            case 'brands':
              this.yeoman.data.brands = Object.values(data);
              break;
            case 'banners':
              this.yeoman.data.banners = Object.values(data);
              break;
            default:
              console.warn(`Entidad "${entity}" desconocida.`);
              break;
          }
        }
      });
    });
  }




  loadInfofakeData(entity: string): Observable<any> {
    const dataRef = this.gunInstance.get(entity);
    return new Observable<any>((observer) => {
      dataRef.once((data: any) => {
        if (data) {
          console.log(`Datos de "${entity}" encontrados en Gun.js:`, data);
          observer.next(data);
        } else {
          const url = `assets/${entity}.json`; // Cambiar el URL para que apunte a la entidad específica
          this.http.get<InfoResponse>(url).subscribe(
            (dataFromJson: any) => {
              console.log(`Datos de "${entity}" cargados desde el archivo:`, dataFromJson);
              observer.next(dataFromJson);
            },
            (error: any) => {
              console.error(`Error al cargar los datos de "${entity}" desde el archivo:`, error);
              observer.error(error);
            }
          );
        }
      });
    });
  }

  // Función para convertir arrays a objetos con claves únicas
  convertArraysToObjects(data: any): any {
    const convertedData: any = {};
    for (const prop in data) {
      if (Array.isArray(data[prop]) && data[prop].length > 0) {
        const arrayObj: any = {};
        data[prop].forEach((item: any, index: number) => {
          arrayObj[`${prop}_${index}`] = item;
        });
        convertedData[prop] = arrayObj;
      } else {
        convertedData[prop] = data[prop];
      }
    }
    return convertedData;
  }
  
}

