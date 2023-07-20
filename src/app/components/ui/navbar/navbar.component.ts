import { Component, OnInit } from '@angular/core';
import { Yeoman } from '@app/services/yeoman.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public yeoman:Yeoman,
    public router:Router
  ) { }
  isCategoriesRoute(): boolean {
    return this.router.url.includes('categories');
  }
  setVirtualRoute(route:any){
    this.yeoman.virtualRoute=route;
  }
  ngOnInit(): void {
  }

}
