import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { SimpleForm1Page, MainPage, AllServicePage } from '../pages';
/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { email: string, password: string } = {
    email: '@ e-mail ou pseudo',
    password: 'mot de passe'
  };

  tabBarElement: any;

  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController) {
      //this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
  }
  /*
  ionViewWillEnter(){
    this.tabBarElement.style.display = 'none';
  }

  ionViewWillLeave(){
    this.tabBarElement.style.display = 'flex';
  }
*/
  forgot() {
    this.navCtrl.push('ForgotPage');
  }

  signup() {
    this.navCtrl.push('SignupPage');
  }

  // Attempt to login in through our User service
  doLogin() {
      this.navCtrl.push(MainPage);
  }

  prev(){
    this.tabBarElement.style.display = 'flex';
    this.navCtrl.pop();
  }
}
