import { Component, ViewChild } from '@angular/core';
import {  FabContainer } from 'ionic-angular';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { CompleteTestService } from '../../providers/CompleteTestService';

import { SimpleForm1Page } from '../pages';
import { ServiceDetailsPage } from '../pages';
import { WelcomePage } from '../pages';
/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-simple-form',
  templateUrl: 'simple-form.html'
})
export class SimpleFormPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  @ViewChild('fab') fab: FabContainer;
  
  services;
  placeholder="";
  account: { email: string, password: string } = {
    email: '@ e-mail ou pseudo',
    password: 'mot de passe'
  };

  search : { param1: string, param2: string, param3: string, param4: string } = {
    param1: 'iconeName',
    param2: 'param2',
    param3: 'param3',
    param4: 'param4'
  };

  itemsCat: [{id: number, name: string, iconName: string}] = [
  {
    id: 0,
    name : "Client",
    iconName : "leaf"
  },
  {
    id: 1,
    name : "Prospect",
    iconName : "lock"
  },
  {
    id: 2,
    name : "Collaborateur",
    iconName : "plane"
  }
];


  myIcon: string = "Choisissez une catégorie de service";

  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController, public completeTestService: CompleteTestService) {

  }

  getVal(event){
    console.log(event.id);
    this.navCtrl.push(ServiceDetailsPage, {
      param1: event.id,
    });
    this.placeholder = "";
  }

  login() {
    this.navCtrl.push(WelcomePage);
  }

  public ngAfterViewInit(){
    this.fab.setActiveLists(true);
  }

  public chooseService(event, data, fab: FabContainer){
    this.myIcon = this.itemsCat[data].name;
    this.search.param1 = this.itemsCat[data].iconName;
    this.navCtrl.push(SimpleForm1Page, {
      param1: this.myIcon,
    });
  }

}
