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

}
