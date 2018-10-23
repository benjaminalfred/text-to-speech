import {Component} from '@angular/core';
import { NavController, App } from 'ionic-angular';
import {TextToSpeech} from '@ionic-native/text-to-speech';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  text: string;
  rate: number;
  locale: string;
 
  constructor(public navCtrl: NavController, public app: App, private tts: TextToSpeech) {
    this.text = 'Enter text here...';
    this.rate = 1;
    this.locale = 'en-US';
  }
 
  playText() {
    this.tts.speak({
      text: this.text,
      rate: this.rate / 10,
      locale: this.locale
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  logout(){
    // Remove API token 
    const root = this.app.getRootNav();
    root.popToRoot();
}
 
}