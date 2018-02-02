import { Component, ViewChild } from '@angular/core';
import {  FabContainer } from 'ionic-angular';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { CompleteTestService } from '../../providers/CompleteTestService';

import { WelcomePage, TinderQ2Page, ServiceDetailsPage } from '../pages';
/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-simple-form2',
  templateUrl: 'simple-form2.html'
})
export class SimpleForm2Page {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  @ViewChild('fab') fab: FabContainer;

  public param1: string;
  public param2: number;
  public param3: string;
  
  public myIcon: string;
  public myIconId: number;

  placeholder="";
  account: { email: string, password: string } = {
    email: '@ e-mail ou pseudo',
    password: 'mot de passe'
  };

  itemsCat: [{jobsName: any}] = [
    {
      jobsName: ["Boucherie", "Poissonerie", "Boulangerie / Patisserie", "Fruits et légumes", "Produits laitiers", "Grains / Produits amylacés", "Huiles / Graisses végétales ou animales", "Boissons"]
    },
    {
      jobsName:  ["Pharmaceutique", "Textile", "Chimique", "Construction", "Batiment", "Automobile", "Aéronotique", "Lourde"]
    },
    {
      jobsName: ["Nucléaire", "Eolien", "Solaire", "Hydrolique", "Pétrolier", "", "", "Autre"]
    },
    {
      jobsName : ["Grand Commerce", "Petit commerce", "Artisanat", "Hôtellerie", "Restauration", "Autre", "", ""]
    },
    {
      jobsName : ['Aéronotique', 'Ferroviaire', 'Urbain', 'Maritime', 'Astronautique', "Distribution", "Gestion & Pilotage", "Autre"] 
    },
    {
      jobsName : ["Systèmes d'infromation", "Robotique", "Technologies", "Recherche", "Autre", "", "", ""]
    },
    {
      jobsName : ["Médecine", "Parmaceutique", "Aide à la personne", "Gardiennage", "Recherche", "Autre", "", ""]
    },
    {
      jobsName : ["Banque", "Finance", "Assurance", "Audit", "Conseil", "Autre", "", ""]
    }
  ];

  constructor(public navCtrl: NavController,
    navParams: NavParams,
    public toastCtrl: ToastController,
    public completeTestService: CompleteTestService) {

      this.myIcon = "Quel est votre métier ?"
      this.param1 = navParams.get('param1');
      this.param2 = navParams.get('param2');
      this.param3 = navParams.get('param3');
  }

  prev() {
    this.navCtrl.pop();
  }

  login() {
    this.navCtrl.push(WelcomePage);
  }

  getVal(event){
    console.log(event.id);
    this.navCtrl.push(ServiceDetailsPage, {
      param1: event.id,
    });
    this.placeholder = "";
  }
  
  public ngAfterViewInit(){
    this.fab.setActiveLists(true);
  }

  public chooseService(event, data, fab: FabContainer){
    this.myIcon = this.itemsCat[this.param2].jobsName[data];
    this.myIconId = data;
    this.navCtrl.push(TinderQ2Page, {
      param1: this.param1,
      param2: this.param2,
      param3: this.param3,
      param4: this.myIconId,
      param5: this.myIcon
    });
  }
}
