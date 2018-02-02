import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Platform } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { ImageViewerController } from "ionic-img-viewer";

import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';

import { MarqueDetailsPage } from '../pages';

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-product-details',
  templateUrl: 'productDetails.html'
})
export class ProductDetailsPage {

  productId;
  tabBarElement: any;
  products: any[];
  services: any[];
  news: any[];
  marques: any[];
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  // account: { email: string, password: string } = {
  //   email: '@ e-mail ou pseudo',
  //   password: 'mot de passe'
  // };

  // like = false;

  // Our translated text strings
  // private loginErrorString: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, platform: Platform,
    public toastCtrl: ToastController, http:Http, private youtube: YoutubeVideoPlayer, private documentView: DocumentViewer, public imageViewerCtrl: ImageViewerController) {
    
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    this.productId = navParams.get('productId');  

    let servData = http.get('assets/data/services.json').map(res => res.json().services);
    servData.subscribe(data => {
      this.services = data;
    });

    let newsData = http.get('assets/data/news.json').map(res => res.json().news);
    newsData.subscribe(data => {
      this.news = data;
    });

    let productData = http.get('assets/data/products.json').map(res => res.json().products);
    productData.subscribe(data => {
      this.products = data;
    });

    let brandData = http.get('assets/data/marques.json').map(res => res.json().marques);
    brandData.subscribe(data => {
      this.marques = data;
      if (this.products[this.productId].videoId != null)
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
          if (view.id == "ProductDetailsPage"){
            openVideo = false;
          }
        }
        if (openVideo){
          this.youtube.openVideo(this.products[this.productId].videoId);
        }
      }
    });

  }

  openPDF(productId){
    const options: DocumentViewerOptions = {
      title: productId
    }
    
    this.documentView.viewDocument('assets/img/products/pdf/'+productId+'.pdf', 'application/pdf', options)
  }

  openImg(imageToView) {
    const viewer = this.imageViewerCtrl.create(imageToView)
    viewer.present();
  }

  replayVideo(){
    this.youtube.openVideo(this.products[this.productId].videoId);
  }

  prev() {
    this.navCtrl.pop();
  }

  ionViewWillEnter(){
    this.tabBarElement.style.display = 'none';
  }

  showMarque(){
    this.navCtrl.push(MarqueDetailsPage, {
      marqueId: this.products[this.productId].idMarque
    });
  }

  ionViewWillLeave(){
    this.tabBarElement.style.display = 'flex';
  }

}
