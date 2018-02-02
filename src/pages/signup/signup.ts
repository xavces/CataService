import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import {  FabContainer } from 'ionic-angular';

import {TinderQ2Page } from '../pages';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})

export class SignupPage {

  public param1: string;
  
  @ViewChild('signupSlider') signupSlider: any;
  @ViewChild('fab') fab: FabContainer;

  slideOneForm: FormGroup;
  slideTwoForm: FormGroup;
  slideThreeForm: FormGroup;

  who: string ;

  jobs;
  jobsTab;
  
  tabBarElement: any;

  submitAttempt: boolean = false;
  lastSlide: boolean = true;

  itemsCat: [{id: number, name: string, iconName: string, jobsName: any}] = [
    {
      id: 0,
      name : "Agriculture & agroalimentaire",
      iconName : "leaf", 
      jobsName: this.jobsTab= ["Agriculture", "Agroalimentaire", "Autre"]
    },
    {
      id: 1,
      name : "Industrie",
      iconName : "lock", 
      jobsName: this.jobsTab = ["Pharmaceutique", "Textile", "Chimique", "Construction", "Batiment", "Automobile", "Aéronotique", "Lourde", "Autre"]
    },
    {
      id: 2,
      name : "Energie",
      iconName : "plane",
      jobsName: this.jobsTab = ["Nucléaire", "Eolien", "Solaire", "Hydrolique", "Pétrolier", "Autre"]
    },
    {
      id: 3,
      name : "Commerce & Tourisme",
      iconName : "people", 
      jobsName : this.jobsTab = ["Grand Commerce", "Petit commerce", "Artisanat", "Hôtellerie", "Restauration", "Autre"]
    },
    {
      id: 4,
      name : "Transport & Logistique",
      iconName : "train",
      jobsName : this.jobsTab = ['Aéronotique', 'Ferroviaire', 'Urbain', 'Maritime', 'Astronautique', "Distribution", "Gestion & Pilotage", "Autre"] 
    },
    {
      id: 5,
      name : "Télécoms & Informatique",
      iconName : "nuclear",
      jobsName : this.jobsTab = ["Systèmes d'infromation", "Robotique", "Technologies", "Recherche", "Autre"]
    },
    {
      id: 6,
      name : "Santé & Services",
      iconName : "school",
      jobsName : this.jobsTab = ["Médecine", "Parmaceutique", "Aide à la personne", "Gardiennage", "Recherche", "Autre"]
    },
    {
      id: 7,
      name : "Economie",
      iconName : "code-working",
      jobsName : this.jobsTab = ["Banque", "Finance", "Assurance", "Audit", "Conseil", "Autre"]
    }
  ];

  myIcon: string = "Secteur d'activité ?";

  constructor(public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public toastCtrl: ToastController) {

    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');

    this.slideOneForm = formBuilder.group({
      firstName: ['',  Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      lastName: ['',  Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      email: [''],
      mdp: ['']
    });

    this.slideTwoForm = formBuilder.group({
      activity: ['']
    });

    this.slideThreeForm = formBuilder.group({
      work: ['']
    });
  }

  ionViewWillLeave(){
    this.tabBarElement.style.display = 'flex';
  }

  next(){
    console.log(this.signupSlider._activeIndex);
    if (this.signupSlider._activeIndex == 0){
      this.lastSlide = false;
      this.signupSlider.slideNext();
    }
    else{
      this.lastSlide = true;
      this.signupSlider.slideNext();
    }
  }

  prev(){
    console.log(this.signupSlider._activeIndex);
    if (this.signupSlider._activeIndex == 0)
      this.navCtrl.pop();
    else if (this.signupSlider._activeIndex == 2){
      this.lastSlide = false;
      this.signupSlider.slidePrev();
    }
    else{
      this.lastSlide = true;
      this.signupSlider.slidePrev();
    }
  }

  save(){
    this.submitAttempt = true;
    
    if(!this.slideOneForm.valid){
      this.signupSlider.slideTo(0);
      this.lastSlide = true;
    }
    else {
      this.navCtrl.push(TinderQ2Page);
    }
  }

  public ngAfterViewInit(){
    this.fab.setActiveLists(true);
  }

  public chooseService(event, data, fab: FabContainer){
    this.myIcon = this.itemsCat[data].name;
    this.lastSlide = false;
    this.signupSlider.slideNext();
    this.jobs = this.itemsCat[data].jobsName ; 
  }
}

