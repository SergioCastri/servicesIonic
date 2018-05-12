import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/*
  Generated class for the UsersProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersProvider {

  private urlUsers: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(public http: HttpClient) {
    console.log('Hello UsersProvider Provider');
  }

  takeUsers(){
    return this.http.get(this.urlUsers);
  }

}