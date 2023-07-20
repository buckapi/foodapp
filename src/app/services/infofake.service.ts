// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
// import { Yeoman } from './yeoman.service';


// @Injectable()
// export class InfofakeService {
//   info: any = [];
//   constructor(public yeoman:Yeoman,private http: HttpClient) {
//     this.loadInfofakeData();
//   }

//   loadInfofakeData(): Observable<any> {
//     const gistId = 'd47846171b737abe78956f8dd31fb177'; // Reemplaza con el ID de tu Gist
//     // const url = `https://api.github.com/gists/${gistId}`;
//       const url = 'https://raw.githubusercontent.com/buckapi/infoFakeFoodapp/main/infoFake.json';
//     return this.http.get<any>(url).pipe(
//       map(data => {
//         this.yeoman.top=data.top;
//         this.yeoman.banners=data.banners;
//         this.yeoman.categories=data.categories;
//         this.yeoman.suggestions=data.suggestions;
//         this.yeoman.brands=data.brands;
//         // this.yeoman.top=data.top;
//         this.info = data;
//         // console.log(JSON.stringify(this.info));
//         return data;
//       })
//     );
//   }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InfofakeService {
  yeoman: any = {}; // Puedes definir la propiedad yeoman aquí o en otro lugar adecuado

  constructor(private http: HttpClient) {}

  loadInfofakeData(): Observable<any> {
    const url = 'https://raw.githubusercontent.com/buckapi/infoFakeFoodapp/main/infoFake.json';
    return this.http.get<any>(url).pipe(
      map(data => {
        // Aquí simplemente retornamos los datos sin hacer asignaciones al componente
        return data;
      })
    );
  }
}
