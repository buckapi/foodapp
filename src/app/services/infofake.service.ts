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
  top = [
    { name: "Ben & Floren", off: 150, upto: 2, foodItem: "Chicken quesadilla, avocado...", reviews: 3.7, place: "Ontario", price: 5, distance: 2, time: 25, images: ["assets/radarfood/images/product/vp1.png"] },
    { name: "242 Pizza", off: 150, upto: 10, foodItem: "Detroit style, deep garlic loaf...", reviews: 4.5, place: "Toronto", price: 19, distance: 3, time: 18, images: ["assets/radarfood/images/product/vp2.png"] },
    { name: "AWS-USA", off: 0, upto: 0, foodItem: "Classic bacon & eggs, sausage...", reviews: 4.0, place: "New York", price: 3, distance: 2.5, time: 35, images: ["assets/radarfood/images/product/vp3.png"] },
    { name: "Cactus Club Cafe", off: 0, upto: 0, foodItem: "Spicy ahi roll, prawn crunch..", reviews: 5.0, place: "Victoria", price: 6, distance: 2.6, time: 20, images: ["assets/radarfood/images/product/vp4.png"] },
    { name: "Moxie Cafe", off: 50, upto: 20, foodItem: "Crispy bottom vegan potsticker...", reviews: 4.3, place: "Toronto", price: 5, distance: 1, time: 15, images: ["assets/radarfood/images/product/vp5.png"] }
  ];
  constructor() {}
}