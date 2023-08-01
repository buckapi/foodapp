import { Component, OnInit } from '@angular/core';
import { Yeoman } from '@app/services/yeoman.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(
    public yeoman:Yeoman
  ) { }

  ngOnInit(): void {
  }

}
