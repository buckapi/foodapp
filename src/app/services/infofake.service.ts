import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InfofakeS {
  suggestions: any[] = [];
  categories: any[] = [];
  brands: any[] = [];
  top: any[] = [];
  Infofake:any=[];
  constructor(private http: HttpClient) { this.loadInfofakeData()}

   loadInfofakeData() {
    const url = 'https://drive.google.com/uc?export=download&id=1vFwO3nG90kVrSaHkXwZEpZOEOXT9OcEq';
    return this.http.get<any>(url).toPromise()
      .then(data => {
        this.Infofake = data;
        console.log(JSON.stringify(this.Infofake));
      });
  }
}