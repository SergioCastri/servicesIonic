import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/*
  Generated class for the PhotosProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PhotosProvider {

  private urlPhotos: string = 'https://jsonplaceholder.typicode.com/photos';

  constructor(public http: HttpClient) {
    console.log('Hello PhotosProvider Provider');
  }

  takePhotos(){
    return this.http.get(this.urlPhotos);
  }

}