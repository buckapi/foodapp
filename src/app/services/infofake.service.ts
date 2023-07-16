import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class InfofakeService {
  suggestions: any[] = [];
  categories: any[] = [];
  brands: any[] = [];
  top: any[] = [];
  Infofake: any = [];

  constructor(private http: HttpClient) {
    this.loadInfofakeData();
  }

  loadInfofakeData() {
    const url = 'https://drive.google.com/uc?export=download&id=1vFwO3nG90kVrSaHkXwZEpZOEOXT9OcEq';

    this.http.get<any>(url).pipe(
      map(data => {
        this.Infofake = data;
        // Aquí puedes realizar el procesamiento adicional de los datos según tus necesidades
        console.log(data);
        console.log(JSON.stringify(this.Infofake));
        // Devuelve los datos procesados si es necesario
        return data;
      })
    ).subscribe(
      data => {
        // Aquí puedes manejar los datos procesados si es necesario
        console.log('Datos cargados:', data);
      },
      error => {
        // Aquí puedes manejar los errores si ocurre alguno durante la solicitud HTTP
        console.error('Error al cargar los datos:', error);
      }
    );
  }
}