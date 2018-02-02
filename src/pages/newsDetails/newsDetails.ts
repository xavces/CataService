import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { MarqueDetailsPage } from '../pages';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-news-details',
  templateUrl: 'newsDetails.html'
})
export class NewsDetailsPage {
  tabBarElement: any;
  newsId;
  news: any[];
  marques:any[];
  products:any[];

  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  // account: { email: string, password: string } = {
  //   email: '@ e-mail ou pseudo',
  //   password: 'mot de passe'
  // };

  // Our translated text strings
  // private loginErrorString: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public toastCtrl: ToastController, http:Http) {

    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    this.newsId = navParams.get('param1');
    console.log(this.newsId);

    let newsData = http.get('assets/data/news.json').map(res => res.json().news);
    newsData.subscribe(data => {
      this.news = data;
    });

    let brandData = http.get('assets/data/marques.json').map(res => res.json().marques);
    brandData.subscribe(data => {
      this.marques = data;
    });

    let productData = http.get('assets/data/products.json').map(res => res.json().products);
    productData.subscribe(data => {
      this.products = data;
    });

  }

  
  prev() {
    this.navCtrl.pop();
  }

  showMarque(){
    console.log(this.news[this.newsId].marqueId);
    this.navCtrl.push(MarqueDetailsPage, {
      marqueId: this.news[this.newsId].marqueId
    });
  }

  ionViewWillEnter(){
    this.tabBarElement.style.display = 'none';
  }

  ionViewWillLeave(){
    this.tabBarElement.style.display = 'flex';
  }

  show(event){
    if (event.srcElement.style.wordBreak == "normal"){
      event.srcElement.style.wordBreak = "break-word";
      event.srcElement.style.width = "100px";
    }
    else{
      event.srcElement.style.wordBreak = "normal";
      event.srcElement.style.width = "100%";
      event.srcElement.style.minWidth = "100px";
    }
  }
  // forgot() {
  //   this.navCtrl.push('ForgotPage');
  // }

  // signup() {
  //   this.navCtrl.push('SignupPage');
  // }

  // login() {
  //   this.navCtrl.push('LoginPage');
  // }

  // // Attempt to login in through our User service
  // doLogin() {
  //     this.navCtrl.push('SimpleFormPage');
  // }
}
