import { Component, OnInit } from '@angular/core';
import { UploaderCaptions } from 'ngx-awesome-uploader';
import { HttpClient } from '@angular/common/http';
Yeoman
import { DemoFilePickerAdapter } from  '../..//file-picker.adapter';
import { Yeoman } from '@app/services/yeoman.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  steepActive:string='one';
  data = {
    images: [] as string[], // o cualquier otro tipo de dato adecuado, como any[]
    name: '',
    description: '',
    price: null,
    stock: 0,
    ref: '',
    idProperty: '',
    idCategory:'c00001',
  };
  adapter = new  DemoFilePickerAdapter(this.http,this.yeoman);
  constructor(
    public yeoman:Yeoman,
    private http: HttpClient,
  ) { }
  public captions: UploaderCaptions = {
    dropzone: {
      title: 'Imágenes del producto',
      or: '.',
      browse: 'Cargar',
    },
    cropper: {
      crop: 'Cortar',
      cancel: 'Cancelar',
    },
    previewCard: {
      remove: 'Borrar',
      uploadError: 'error',
    },
  };  
  ngOnInit(): void {
  }
next(f:any){
  if(f==2){this.steepActive="two";}
}
}
