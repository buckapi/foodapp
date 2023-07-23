import { Component, AfterViewInit } from '@angular/core';
import { ScriptService } from '@app/services/script.service';
import { ScriptStore } from '@app/services/script.store';
import { SwiperOptions } from 'swiper';
// import { SharedComponent } from './components/shared/shared.component';
import { InfofakeService } from './services/infofake.service';
import { Yeoman } from './services/yeoman.service';
import Gun from 'gun/gun';
import 'gun/sea';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  gun: any; // Variable para la instancia de Gun

  title = 'Foodapp';

  constructor(
    public yeoman: Yeoman,
    public infofake: InfofakeService,
    public script: ScriptService
  ) {
    this.gun = Gun(); // Crear una instancia de Gun
    this.loadInfo();
    this.loadDataFromGun();

    this.script
      .load('bootstrap', 'bundle', 'swiper', 'script')
      .then(data => {})
      .catch(error => console.log(error));
  }

  loadInfo() {
    this.infofake.getData().subscribe((data: any) => {
      console.log("desde GUN" +data)
      this.yeoman.banners = Object.values(data.banners);
      this.yeoman.brands = Object.values(data.brands);
      this.yeoman.suggestions = Object.values(data.suggestions);
      this.yeoman.top = Object.values(data.top);
      this.yeoman.categories = Object.values(data.categories);
    });
  }

  loadDataFromGun() {
    this.gun.get('gun').on((data: any) => {
      if (data) {
        console.log("EPAAAA"+data)
        // Aquí puedes acceder a los datos almacenados en 'gun' y asignarlos a tus variables
        this.yeoman.data.offers = data.offers;
        this.yeoman.data.suggestions = data.suggestions;
        this.yeoman.data.banners = data.banners;
        this.yeoman.data.categories = data.categories;
        this.yeoman.data.brands = data.brands;
        this.yeoman.data.top = data.top;

        // Hacer lo que necesites con los datos
      }
    });
  }

  ngAfterViewInit(): void {
    // No es necesario llamar a loadDataFromGun() aquí
  }
}
