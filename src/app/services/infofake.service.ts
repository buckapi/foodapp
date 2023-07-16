import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class InfofakeService {
  suggestions: any[] = [];
  categories: any[] = [];
  brands: any[] = [];
  top: any[] = [];
  info: any = [];

  constructor(private http: HttpClient) {
    this.loadInfofakeData();
  }

  loadInfofakeData(): Observable<any> {
    const url = 'https://www.buckapi.us/infoFake.json';

    return this.http.get<any>(url).pipe(
      map(data => {
        this.info = data;
        console.log(JSON.stringify(this.info));
        return data;
      })
    );
  }
}