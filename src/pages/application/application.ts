import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ApplicationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-application',
  templateUrl: 'application.html',
})


export class ApplicationPage {
  application: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.application = navParams.get('application');
    console.log(this.application)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApplicationPage');

  }

  prev() {
    this.navCtrl.pop();
  }


}
