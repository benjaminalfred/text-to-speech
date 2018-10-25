import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the UserAuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserAuthProvider {

  url: string = "http://localhost:3000/api/AppUsers";
  returnUrl: string = "main";
  constructor( private http : HttpClient) {
    console.log('Hello UserAuthProvider Provider');
   }
  
  register(user){
    return this.http.post(this.url, user)
  }

 login(user){
    console.log(user)
    return this.http.post( this.url + "/login", user)
  }
  
   toHomePage(resData){
    window.sessionStorage.setItem( "token", resData.token)
    window.sessionStorage.setItem( "userId", resData.id)
  }
}


