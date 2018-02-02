import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { CompleteNewsService } from '../../providers/CompleteNewsService';
import { NewsDetailsPage } from '../pages';
import { Http } from '@angular/http';
/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { email: string, password: string } = {
    email: '@ e-mail ou pseudo',
    password: 'mot de passe'
  };

  placeholder="";
  dates:string[];
  cleanDates:string[];
  datesFinish:string[];
  news:any[];
  marques:any[];

  constructor(http: Http, public navCtrl: NavController,
    public toastCtrl: ToastController,
    public completeNewsService: CompleteNewsService) {

      this.dates = new Array();
      let newsData = http.get('assets/data/news.json').map(res => res.json().news);
      newsData.subscribe(data => {
        this.news = data.sort(function(a, b){
          var dateA = new Date(a.date);
          var dateB =new Date(b.date);
          return  (dateB.getTime() - dateA.getTime());
        });
        for(var index of data){
          this.dates.push(index.date);
        }
        console.log(this.dates);
        this.dates = this.cleanArray(this.dates);
        var result = new Array();
        for (var date of this.dates)
        {
          var dateFormat = new Date(date);
          var day = dateFormat.getDay();
          var month = dateFormat.getMonth();
          var enumDayFr = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
          var enumMonthFr = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre"];
          var array = date.split(" ");
          var strFr = enumDayFr[day]+ " " +array[1].substring(0, 2)+ " "+enumMonthFr[month]+ " "+array[2];
          result.push(strFr);
        }
        this.datesFinish = this.dates;
        this.cleanDates = result;
      });

      let brandData = http.get('assets/data/marques.json').map(res => res.json().marques);
      brandData.subscribe(data => {
        this.marques = data;
      });

      
  }

  getVal(event){
    console.log(event.id);
    this.navCtrl.push(NewsDetailsPage, {
      param1: event.id,
    });
    this.placeholder="";
  }

  showDetails(event, idNews){
    this.navCtrl.push(NewsDetailsPage, {
      param1: idNews,
    });
  }
  login() {
    this.navCtrl.push('WelcomePage');
  }

  //cleanArray removes all duplicated elements
  cleanArray(array) {
    var i, j, len = array.length, out = [], obj = {};
    for (i = 0; i < len; i++) {
      obj[array[i]] = 0;
    }
    for (j in obj) {
      out.push(j);
    }
    return out;
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
