import { Component, OnInit ,AfterViewInit} from '@angular/core';
import { Yeoman } from '@app/services/yeoman.service';
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements AfterViewInit {

  constructor(
    public yeoman:Yeoman
  ) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {  
    this.yeoman.virtualRoute="offers";      
   
}
}
