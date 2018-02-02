import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

import { CompleteTestService } from '../../providers/CompleteTestService';


@IonicPage() 
@Component({
  selector: 'page-all-service',
  templateUrl: 'all-service.html',
})
export class AllServicePage {
  services: any;
  idservices: any;
  applications: any;
  urlMarque: String = "assets/img/marques/";
  buttonSearch: String = "display";
  search: String = "noDisplay";

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams, public completeTestService: CompleteTestService) {
    let servData = http.get('assets/data/services.json').map(res => res.json().services);
    servData.subscribe(data => {
      this.services = data;
      console.log(this.services);
    });

    let appliData = http.get('assets/data/applications.json').map(res =>res.json().applications);
    appliData.subscribe(data => {
      this.applications = data;
      console.log(this.applications)
      
    })

  }

  serviceDetail(objet){
    console.log("test")
    this.navCtrl.push('ProductDetailsPage', {
      productId: 2,
    });
  }

  viewAll(applicationArg){
    this.navCtrl.push('ApplicationPage', {
      application: applicationArg,
    });
  }

  activateSearch(){
    
  }


}
