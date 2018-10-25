import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { UserAuthProvider } from '../../providers/user-auth/user-auth';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user: any = {
    email: "",
    password: ""

  };

  constructor(public  navCtrl:  NavController, public  navParams:  NavParams, private  app:  App, public  appUser:  UserAuthProvider) {
  }

  login(logUser) {
    console.log("login");
    this.goHome();
}

goHome(){
    this.app.getRootNav().setRoot(TabsPage, {animate:  true, direction:  'forward'});
}

onRegister() {
    console.log("register");
    this.appUser.register(this.user).subscribe( res  => {
        console.log(res);
        this.goHome();
    }, 
  err  =>{}
 );
 }
}
