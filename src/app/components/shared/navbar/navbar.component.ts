import { Component, OnInit } from '@angular/core';
import { Yeoman } from '@app/services/yeoman.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public yeoman:Yeoman
  ) { }

  ngOnInit(): void {
  }

}
