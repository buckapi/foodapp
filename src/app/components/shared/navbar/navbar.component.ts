import { Component, OnInit } from '@angular/core';
import { Yeoman } from '@app/services/yeoman.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public yeoman:Yeoman,
    private router:Router
  ) { }
  isCategoriesRoute(): boolean {
    return this.router.url.includes('categories');
  }
  ngOnInit(): void {
  }

}
