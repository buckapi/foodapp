import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Yeoman {
    virtualRoute:any="home";
    pop:Boolean=false;
    data:any={};
    products:any={};
    // products:any[]=[];
    currency:number=1;
    config: {
      clientSelected:number;
    } = {clientSelected:-1} ;
    origin: {
      name: string;
      restUrl: string;
      GQLUrl: string;
    } = {
      name: "default",
      restUrl: "<origin rest url>",
      GQLUrl: "<origin GQL url>",
    };
    constructor() {}
}