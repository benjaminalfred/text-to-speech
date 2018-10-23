import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  login(){
    // Your app login API web service call triggers 
    this.navCtrl.push(TabsPage, {}, {animate: false});
  }

}
