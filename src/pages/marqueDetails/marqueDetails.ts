import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

import { ServiceDetailsPage } from '../pages';
import { NewsDetailsPage } from '../pages';
import { ProductDetailsPage } from '../pages';
/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-marque-details',
  templateUrl: 'marqueDetails.html'
})
export class MarqueDetailsPage {

  shownGroup = null;
  marqueId;
  tabBarElement: any;
  news: any[];
  marques: any[];
  services: any[];

  listShown: boolean=false;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public toastCtrl: ToastController, http:Http, private youtube: YoutubeVideoPlayer) {
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    this.marqueId = navParams.get('marqueId');  

    let newsData = http.get('assets/data/news.json').map(res => res.json().news);
    newsData.subscribe(data => {
      this.news = data;
    });

    
    let servData = http.get('assets/data/services.json').map(res => res.json().services);
    servData.subscribe(data => {
      this.services = data;
    });

    let brandData = http.get('assets/data/marques.json').map(res => res.json().marques);
    brandData.subscribe(data => {
      this.marques = data;
      if (this.marques[this.marqueId].videoId != null)
      {
        let openVideo = true;
        var vlength = this.navCtrl.getViews().length;
        let final = new Array();
        for (let views of this.navCtrl.getViews())
        {
          if (views != this.navCtrl.getViews()[vlength - 1])
          {
            final.push(views);
          }
        }
        for (let view of final){
          if (view.id == "MarqueDetailsPage"){
            openVideo = false;
          }
        }
        if (openVideo){
          console.log(openVideo);
          this.youtube.openVideo(this.marques[this.marqueId].videoId);
        }
      }
    });

  }

  replayVideo(){
    this.youtube.openVideo(this.marques[this.marqueId].videoId);
  }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
  };
  
  isGroupShown(group) {
      return this.shownGroup === group;
  };

  prev() {
    this.navCtrl.pop();
  }

  ionViewWillEnter(){
    this.tabBarElement.style.display = 'none';
    console.log("enter");
  }

  ionViewWillLeave(){
    this.tabBarElement.style.display = 'flex';
  }

  showService(index){
    this.navCtrl.push(ServiceDetailsPage, {
      param1: index
    });
  }

  showServicesList(){
    var list = document.getElementsByClassName('list');
    if (this.listShown){
      list[0].setAttribute("hidden", "true");
    }
    else{
      list[0].removeAttribute("hidden");
    }
    this.listShown = !this.listShown;
    
  }

  showProduct(event, index){
    console.log(index);
    this.navCtrl.push(ProductDetailsPage, {
      productId: index
    });

  }

  showNews(event, index){
    console.log(index);
    this.navCtrl.push(NewsDetailsPage, {
      param1: index
    });

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
}
