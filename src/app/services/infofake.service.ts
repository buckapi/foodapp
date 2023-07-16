import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Infofake {
  suggestions = [
    { name: "suggestion uno", price: 4000, images: ["assets/radarfood/images/product/p1.png"] },
    { name: "suggestion dos", price: 4000, images: ["assets/radarfood/images/product/p2.png"] },
    { name: "suggestion tres", price: 4000, images: ["assets/radarfood/images/product/p3.png"] }];
  categories=[
    {name:"PIzza",images:["assets/radarfood/images/product/pizaa.png"]},
    {name:"Burguer",images:["assets/radarfood/images/product/burger.png"]}, 
    {name:"Burritos",images:["assets/radarfood/images/product/boritto.png"]},
    {name:"Hot dogs",images:["assets/radarfood/images/product/hotdog.png"]}, 
    {name:"Moodles",images:["assets/radarfood/images/product/noodles.png"]},
  ];
  brands = [
    { name: "La Pino’z", images: ["assets/radarfood/images/icons/brand1.png"] },
    { name: "McDonald's", images: ["assets/radarfood/images/icons/brand2.png"] },
    { name: "Starbucks", images: ["assets/radarfood/images/icons/brand3.png"] },
    { name: "Pizza Hut", images: ["assets/radarfood/images/icons/brand4.png"] },
    { name: "Burger King", images: ["assets/radarfood/images/icons/brand6.png"] },
    { name: "Subway", images: ["assets/radarfood/images/icons/brand7.png"] },
    { name: "Domino's", images: ["assets/radarfood/images/icons/brand8.png"] },
    { name: "Taco Bell", images: ["assets/radarfood/images/icons/brand9.png"] },
    { name: "Wendy's", images: ["assets/radarfood/images/icons/brand5.png"] },
    { name: "Chipotle", images: ["assets/radarfood/images/icons/brand10.png"] }
];
 
  constructor() {}
}