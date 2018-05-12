import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UsersProvider } from '../../providers/usuarios/usuarios';
import { PhotosProvider } from '../../providers/fotos/fotos';

import { HttpClientModule } from '@angular/common/http';

/**
 * Generated class for the Segment1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-segment',
  templateUrl: 'segment.html',
})
export class Segment1Page {

  usuarios;
  photos;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public userProvider: UsersProvider, public photosProvider: PhotosProvider) {
  }

  ionViewDidLoad(){
  }

  downUsers(){
    this.userProvider.takeUsers()
    .subscribe(
      (data)=> {this.usuarios = data;},
      (error) => {console.log(error);}
    )
  }

  downPhotos(){
    this.photosProvider.takePhotos()
    .subscribe(
      (data)=> {this.photos = data;},
      (error) => {console.log(error);}
    )
  }


}
