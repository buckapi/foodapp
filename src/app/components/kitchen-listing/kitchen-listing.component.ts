import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Yeoman } from '@app/services/yeoman.service';
import { TopComponent } from '../shared/top/top.component';

@Component({
  selector: 'app-kitchen-listing',
  templateUrl: './kitchen-listing.component.html',
  styleUrls: ['./kitchen-listing.component.css']
})
export class KitchenListingComponent implements OnInit {

  constructor( 
    public topComponent:TopComponent,
    public yeoman:Yeoman,
    public router:Router) { 
      // this.topComponent.loadInfo("top") desactivado
    }

  ngOnInit(): void {
  }

}
