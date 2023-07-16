import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Infofake {

  suggestions:any=[
    {
      name:"suggestion uno",
      price: 4000,
      images:[
        "assets/radarfood/images/product/p1.png",
        "ruta_imagen_2.jpg",
        "ruta_imagen_3.jpg"
      ]
    },
    {
      name:"suggestion dos",
      price: 4000,
      images:[
        "assets/radarfood/images/product/p2.png",
        "ruta_imagen_2.jpg",
        "ruta_imagen_3.jpg"
      ]
    },
    {
      name:"suggestion tres",
      price: 4000,
      images:[
        "assets/radarfood/images/product/p3.png",
        "ruta_imagen_2.jpg",
        "ruta_imagen_3.jpg"
      ]
    }
  ];


  top5:any=[
    {
      name:"top uno",
      price: 4000,
      images:[
        "ruta_imagen_1.jpg",
        "ruta_imagen_2.jpg",
        "ruta_imagen_3.jpg"
      ]
    },
    {
      name:"top dos",
      price: 4000,
      images:[
        "ruta_imagen_1.jpg",
        "ruta_imagen_2.jpg",
        "ruta_imagen_3.jpg"
      ]
    },
    {
      name:"top tres",
      price: 4000,
      images:[
        "ruta_imagen_1.jpg",
        "ruta_imagen_2.jpg",
        "ruta_imagen_3.jpg"
      ]
    }
  ]




 
  constructor() {}
}