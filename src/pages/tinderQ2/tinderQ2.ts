import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompleteTestService } from '../../providers/CompleteTestService';

import { Http } from '@angular/http';
import 'rxjs/Rx';

import { ServiceDetailsPage } from '../pages';
import { ResultPage } from '../pages';
import { WelcomePage } from '../pages';

import {
  StackConfig,
  DragEvent,
  SwingStackComponent
} from 'angular2-swing';

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-tinderQ2',
  templateUrl: 'tinderQ2.html'
})

export class TinderQ2Page {
  @ViewChild('myswing1') swingStack: SwingStackComponent;
  
  public param1: string;
  public param2: number;
  public param3: string;
  public param4: number;
  public param5: string;
  public resultsTemp: Array<number>;

  placeholder="";
  cards: Array<any>;
  stackConfig: StackConfig;
  recentCard: string = '';

  currentNode;
  currentQId;
  questionsId: Array<number>;

  showButton: boolean = true ; 

  myQuestions;
  myAnswer;
  questions = 
  [
    {
      id: 0,
      name: "Surface recevant du public",
      question: "Possédez-vous une surface commerciale ou magasin ?",
      img: "assets/img/questions/boutique-fruits.jpg",
      // + hygiene et prop classique + Gestion des déchets - secteur industriel
      servicesIdIfYes: [0, 5, 6, 19]
    },
    {
      id: 1,
      name: "Surface recevant du public",    
      question: "Possédez-vous des bureaux ou sièges sociaux ?",
      img: "assets/img/questions/bureau.jpg",
      servicesIdIfYes: [0, 5, 6, 8, 17]
    },
    {
      id: 2,
      name: "Clients en situation d'handicap",
      question: "Désirez-vous accompagner vos clients en situation d'handicap ?",
      img: "assets/img/questions/handicap.jpg",
      servicesIdIfYes: [20]
    },
    {
      id: 3,
      name:"Usine ou zone de fabrication",
      question: "Possedez-vous une usine ou zone de fabrication ?",
      img: "assets/img/questions/usine-boissons.jpg",
      servicesIdIfYes: [1, 2, 3, 5, 7]
    },
    {
      id: 4, 
      name:"Sécurité",
      question: "Désirez-vous voir nos services relatifs à la sécurité ?",
      img: "assets/img/questions/securite-q.jpg",
      servicesIdIfYes: [9, 10, 11, 12, 13]
    },
    {
      id: 5,
      name: "Service logistique",
      question: "Seriez-vous interessés par une optimisation de votre système logistique et manutention ?",
      img: "assets/img/questions/logistique.jpg",
      servicesIdIfYes: [21, 22, 23, 24]
    },
    {
      id: 6,
      name: "Recrutement",
      question: "Pensez-vous à recruter ?",
      img: "assets/img/questions/recrutement.jpg",
      servicesIdIfYes: [39, 40, 41]
    },
    {
      id: 7,
      name: "Evenement",
      question: "Pensez-vous à organiser des évenements ?",
      img: "assets/img/questions/evenement.jpg",
      servicesIdIfYes: [18]
    },
    {
      id: 8,
      name: "Technologies",
      question: "Voulez-vous voir nos solutions pour le traitement de déchets radioactif ?",
      img: "assets/img/questions/technologies.jpg",
      servicesIdIfYes: [28, 34, 35, 36, 37]
    },
    {
      id: 9,
      name: "Surface recevant du public",    
      question: "Possédez-vous un cabinet médical ?",
      img: "assets/img/questions/cabinet.jpg",
      servicesIdIfYes: [0, 5, 6, 8, 17]
    },
  ];


  getNextNode(like){
    if (like){
      for (let serviceId of this.currentNode[this.currentQId].servicesIdIfYes)
      {
        let bool = false;
        for (let resultId of this.resultsTemp)
        {
          if (serviceId == resultId){
            bool = true
          }
        }
        if (!bool)
          this.resultsTemp.push(serviceId);
      }
    }
    this.currentQId ++;
  }

  // Called whenever we drag an element
  onItemMove(element, x, y, r) {
    var elmt = element.children[0].children[0].children[0].children[0].children[0].children[0];
    var color = '';
    var abs = Math.abs(x);
    let min = Math.trunc(Math.min(16*16 - abs, 16*16));
    let hexCode = this.decimalToHex(min, 2);

    if (x > 0) {
      color = '#' + hexCode + 'FF' + hexCode;
    } else if (x === 0){
      color = 'transparent';
    }
    else{
      color = '#FF' + hexCode + hexCode;
    }

    element.style['transform'] = `translate3d(0, 0, 0) translate(${x}px, ${y}px) rotate(${r}deg)`;
    elmt.style['background-color'] = color;
    elmt.style['opacity'] = 0.4;
  }
   
  // Connected through HTML
  voteUp(like: boolean) {
    // if (this.currentNode.length == this.currentQId + 3)
    // {
    //   var lastCard = document.getElementsByClassName('card')[0];
    //   lastCard.setAttribute("style", "background: #b2284e; background: -webkit-linear-gradient(-90deg, #b2284e, #2a73d3); background: -o-linear-gradient(-90deg, #b2284e, #2a73d3); background: -moz-linear-gradient(-90deg, #b2284e, #2a73d3); background: linear-gradient(-90deg, #b2284e, #2a73d3);");
    // }
    // if (this.currentNode.length == this.currentQId + 2){
    //   var lastCard = document.getElementsByClassName('card')[0];
    //   lastCard.setAttribute("style", "display:none");
    // }

    this.getNextNode(like);
    this.cards.pop();
    if (this.currentNode[this.currentQId] != null)
    {
      this.cards.push(this.currentNode[this.currentQId]);
    }
    else{
      console.log(this.resultsTemp);
      this.navCtrl.push(ResultPage, {
        param1: this.param1,
        param2: this.param2,
        param3: this.param3,
        param4: this.param4,
        param5: this.param5,
        param6: this.resultsTemp,
        param7: this.myAnswer
      });
      console.log(this.myAnswer);
      this.resultsTemp = [];
      this.myAnswer = [];
      this.cards.pop();
      this.cards.pop();
    }
  }
   
  // Add new cards to our array
  addNewCards(node, id) {
      if (this.currentNode.length > id)
      {
        this.cards.push(node);
      }
  }
   
  // http://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript
  decimalToHex(d, padding) {
    var hex = Number(d).toString(16);
    padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;
    
    while (hex.length < padding) {
      hex = "0" + hex;
    }
    
    return hex;
  }

  constructor(http: Http, public navCtrl: NavController, public navParams: NavParams, public completeTestService: CompleteTestService) {

      this.stackConfig = {
        throwOutConfidence: (offsetX, offsetY, element) => {
          return Math.min(Math.abs(offsetX) / (element.offsetWidth/2), 1);
        },
        transform: (element, x, y, r) => {
          this.onItemMove(element, x, y, r);
        },
        throwOutDistance: (d) => {
          return 800;
        }
      }; 

      this.param1 = navParams.get('param1');
      this.param2 = navParams.get('param2');
      this.param3 = navParams.get('param3');
      this.param4 = navParams.get('param4');
      this.param5 = navParams.get('param5');

      console.log("param1: " + this.param1);
      console.log("param2: " + this.param2);
      console.log("param3: " + this.param3);
      console.log("param4: " + this.param4);
      console.log("param5: " + this.param5);

      this.resultsTemp = new Array();
      this.myAnswer = new Array();
  }

  getVal(event){
    console.log(event.id);
    this.navCtrl.push(ServiceDetailsPage, {
      param1: event.id,
    });
    this.placeholder="";
  }
  
  prev(){
    var footer = document.getElementsByClassName('footer');
    console.log("before removing first: "+footer[0]);
    footer[0].remove();
    console.log("after removing first: "+footer[0]);
    this.navCtrl.pop();
  }
  ngAfterViewInit() {
    console.log("INIT");
    this.myQuestions = new Array();
    switch(this.param2){
      // id = 0, secteur: Agroalimentaire
      case 0:
        this.myQuestions.push(this.questions[0]);
        this.myQuestions.push(this.questions[2]);
        this.myQuestions.push(this.questions[3]);
        this.myQuestions.push(this.questions[4]);
        this.myQuestions.push(this.questions[6]);
        this.myQuestions.push(this.questions[7]);
        switch(this.param4){

          // Boucherie
          case 0:

            break;
          // Poissonnerie
          case 1:
            break;
          // Boulangerie / patisserie
          case 2:
            break;
          // Fruits et légumes
          case 3:
            break;
          // Produits laitiers
          case 4:
            break;
          // Grains / Produits amylacés
          case 5:
            break;
          // Huiles / Graisses végétales ou animales
          case 6:
            break;
          // Boissons
          case 7:
            break;
        };
        this.currentNode = this.myQuestions;
        this.currentQId = 0;
        break;

      // id = 1, secteur: Industrie  
      case 1:
        this.myQuestions.push(this.questions[1]);
        this.myQuestions.push(this.questions[4]);
        this.myQuestions.push(this.questions[5]);
        this.myQuestions.push(this.questions[6]);
        this.resultsTemp.push(1);
        this.resultsTemp.push(2);
        this.resultsTemp.push(3);
        this.resultsTemp.push(5);
        this.resultsTemp.push(7);
        this.resultsTemp.push(38);
        switch(this.param4){
          
          // Pharmaceutique
          case 0:
            this.resultsTemp.push(34);
            break;
          // Textile
          case 1:
            break;
          // Chimique
          case 2:
            this.resultsTemp.push(34);
            break;
          // Construction
          case 3:
            break;
          // Bâtiment
          case 4:
            this.resultsTemp.push(25)
            break;
          // Automobile
          case 5:
            break;
          // Aéronautique
          case 6:
            break;
          // Lourde
          case 7:
            this.resultsTemp.push(34);
            break;
        };
        this.currentNode = this.myQuestions;
        this.currentQId = 0;
        break;

      // id = 2, secteur: Energie
      case 2:
        this.myQuestions.push(this.questions[3]);
        this.myQuestions.push(this.questions[4]);
        this.myQuestions.push(this.questions[1]);
        this.myQuestions.push(this.questions[5]);
        this.myQuestions.push(this.questions[6]);
        this.resultsTemp.push(1);
        this.resultsTemp.push(2);
        this.resultsTemp.push(3);
        this.resultsTemp.push(5);
        this.resultsTemp.push(7);
        this.resultsTemp.push(8);
        switch(this.param4){
          
          // Nucléaire
          case 0:
            this.myQuestions.push(this.questions[8]);
            this.resultsTemp.push(25);
            this.resultsTemp.push(26);
            this.resultsTemp.push(27);
            this.resultsTemp.push(30);
            this.resultsTemp.push(31);
            this.resultsTemp.push(32);
            this.resultsTemp.push(33);
            break;
          // Eolien
          case 1:
            break;
          // Solaire
          case 2:
            break;
          // Hydrolique
          case 3:
            break;
          // Pétrolier
          case 4:
            break;
          //
          case 5:
            break;
          //
          case 6:
            break;
          // Autre
          case 7:
            break;
        };
        this.currentNode = this.myQuestions;
        this.currentQId = 0;
        break;

      // id = 3, secteur: Commerce & Tourisme
      case 3:
        this.myQuestions.push(this.questions[4]);
        this.myQuestions.push(this.questions[5]);
        this.myQuestions.push(this.questions[6]);
        this.myQuestions.push(this.questions[7]);
        this.myQuestions.push(this.questions[2]);

        this.resultsTemp.push(0);
        this.resultsTemp.push(5);
        this.resultsTemp.push(6);
        this.resultsTemp.push(8);
        this.resultsTemp.push(19)
        switch(this.param4){
          // Grand Commerce
          case 0:
            break;
          // Petit Commerce
          case 1:
            break;
          // Artisanat
          case 2:
            break;
          // Hôtellerie
          case 3:
            break;
          // Restauration
          case 4:
            break;
          // Autre
          case 5:
            break;
          //
          case 6:
            break;
          //
          case 7:
            break;
        };
        this.currentNode = this.myQuestions;
        this.currentQId = 0;
        break;

      // id = 4, secteur: Transports et logistique
      case 4:
        this.myQuestions.push(this.questions[1]);
        this.myQuestions.push(this.questions[4]);
        this.myQuestions.push(this.questions[6])
        this.resultsTemp.push(1);
        this.resultsTemp.push(2);
        this.resultsTemp.push(4);
        this.resultsTemp.push(8);
        this.resultsTemp.push(21);
        this.resultsTemp.push(22);

        switch(this.param4){
          
          // Aéronautique
          case 0:
            this.resultsTemp.push(14);
            this.resultsTemp.push(15);
            this.resultsTemp.push(16);
            break;
          // Ferroviaire
          case 1:
            this.resultsTemp.push(24);
            break;
          // Urbain
          case 2:
            this.resultsTemp.push(23);
            break;
          // Maritime
          case 3:
            break;
          // Astronautique
          case 4:
            break;
          // Distribution
          case 5:
            break;
          // Gestion & pilotage
          case 6:
            break;
          // Autre
          case 7:
            break;
        }; 
        this.currentNode = this.myQuestions;
        this.currentQId = 0;
        break;

      // id = 5, secteur: Télécoms & Informatique
      case 5:
        this.myQuestions.push(this.questions[6]);
        this.myQuestions.push(this.questions[2]);
        this.myQuestions.push(this.questions[4]);
        this.myQuestions.push(this.questions[1]);
        this.myQuestions.push(this.questions[7]);
        switch(this.param4){
          
          // Systèmes d'information
          case 0:
            break;
          // Robotique
          case 1:
            break;
          // Technologies
          case 2:
            break;
          // Recherches
          case 3:
            break;
          // Autre
          case 4:
            break;
          //
          case 5:
            break;
          //
          case 6:
            break;
          //
          case 7:
            break;
        };     
        this.currentNode = this.myQuestions;
        this.currentQId = 0;
        break;

      // id = 6, secteur: Santé et services
      case 6:
        this.myQuestions.push(this.questions[9]);
        this.myQuestions.push(this.questions[2]);
        this.myQuestions.push(this.questions[4]);
        this.myQuestions.push(this.questions[5]);
        this.myQuestions.push(this.questions[6]);
        this.resultsTemp.push(8);
        switch(this.param4){
          
          // Médecine
          case 0:
            break;
          // Pharmaceutique
          case 1:
            break;
          // Aide à la personne
          case 2:
            break;
          // Gardiennage
          case 3:
            break;
          // Recherche
          case 4:
            break;
          // Autre
          case 5:
            break;
          //
          case 6:
            break;
          //
          case 7:
            break;
        };
        this.currentNode = this.myQuestions;
        this.currentQId = 0;
        break;

      // id = 7, secteur: Economie
      case 7:
        this.myQuestions.push(this.questions[1]);
        this.myQuestions.push(this.questions[2]);
        this.myQuestions.push(this.questions[4]);
        this.myQuestions.push(this.questions[6]);
        this.resultsTemp.push(8);
        this.resultsTemp.push(17);
        switch(this.param4){
          
          // Banque
          case 0:
            break;
          // Finance
          case 1:
            break;
          // Assurance
          case 2:
            break;
          // Audit
          case 3:
            break;
          // Conseil
          case 4:
            break;
          // Autre
          case 5:
            break;
          //
          case 6:
            break;
          //
          case 7:
            break;
        };       
        this.currentNode = this.myQuestions;
        this.currentQId = 0;
        break;
    }
    console.log(this.myQuestions);
    console.log(this.resultsTemp);
    // Either subscribe in controller or set in HTML

    this.swingStack.throwin.subscribe((event: DragEvent) => {
    });
    this.cards = [{}];
    this.addNewCards(this.currentNode[this.currentQId], this.currentQId);

    console.log(this.navCtrl.getPrevious().id) ;
    if(this.navCtrl.getPrevious().id == "WelcomePage" || this.navCtrl.getPrevious().id == "SignupPage"){
      this.showButton = false ; 
    } 
  }

  ionViewDidLeave(){
    console.log(this.navCtrl.getActive());
    if (!(this.navCtrl.getActive().component.name == "WelcomePage") && !(this.navCtrl.getActive().component.name == "TinderQ2Page") && !(this.navCtrl.getActive().component.name == "ServiceDetailsPage"))
    {
      this.currentNode = this.myQuestions;
      this.currentQId = 0;
      this.swingStack.throwin.subscribe((event: DragEvent) => {
      });
      this.cards = [{}];
      this.addNewCards(this.currentNode[this.currentQId], this.currentQId);
    }
    console.log("Did Leave ???");
  }

  login(){
    this.navCtrl.push(WelcomePage);
  }
}
