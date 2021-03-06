import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { UserAuthProvider } from '../../providers/user-auth/user-auth';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user: any = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App, public appUser: UserAuthProvider) {
  }

  onRegister() {
    console.log("register");
    this.appUser.register(this.user).subscribe(res => {
      console.log(res);
      this.goHome();
    },
      err => { }
    );
  }

  goHome() {
    this.app.getRootNav().setRoot(TabsPage, { animate: true, direction: 'forward' });
  }

}
