import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { CompleteTestService } from '../../providers/CompleteTestService';

import { Http } from '@angular/http';
import 'rxjs/Rx';

import { ServiceDetailsPage } from '../pages';
import {
  VisNodes,
  VisEdges,
  VisNetworkService,
  VisNetworkData,
  VisNetworkOptions } from 'ng2-vis/components/network';

class ExampleNetworkData implements VisNetworkData {
  public nodes: VisNodes;
  public edges: VisEdges;
}

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html'
})

export class ResultPage implements OnInit, OnDestroy{

  public param1: string;
  public param2: number;
  public param3: string;
  public param4: number;
  public param5: string;
  public param6: [number];

  public visNetwork: string = 'networkId1';
  public visNetworkData: ExampleNetworkData;
  public visNetworkOptions: VisNetworkOptions;
  public visNetworkService: VisNetworkService;

  firstT: boolean = true;

  services;
  visServices;

  myServiceId;
  boolFooterVisible: boolean = false;
  placeholder="";
  constructor(http: Http, public navCtrl: NavController, visNetworkServ: VisNetworkService, public navParams: NavParams, public completeTestService: CompleteTestService) {
   
    let servData = http.get('assets/data/services.json').map(res => res.json().services);
    servData.subscribe(data => {
      this.services = data;
    });
    
    this.visNetworkService = visNetworkServ;

    this.param1 = navParams.get('param1');
    this.param2 = navParams.get('param2');
    this.param3 = navParams.get('param3'); 
    this.param4 = navParams.get('param4');
    this.param5 = navParams.get('param5');
    this.param6 = navParams.get('param6');

    console.log(this.param6);
  }

  public addNode(node): void {
    this.visNetworkData.nodes.add(node);
  }

  public networkInitialized(): void {
        if (this.firstT)
        {

          for (let resultId of this.param6)
          {
            // pertinence aléatoire
            
            let possib = ["bas", "moyen", "haut"];
            this.services[resultId].pertinence = possib[Math.floor(Math.random() * 3)];
            let myGroup = this.services[resultId].marqueId * 3;
            if (this.services[resultId].pertinence === "haut")
              myGroup = myGroup + 2;
            if (this.services[resultId].pertinence === "moyen")
              myGroup = myGroup + 1;
            console.log(this.services)
            const visService = {
              id: resultId,
              group: myGroup,
              label: this.services[resultId].icon
            }
            if (this.visNetworkData.nodes.getById(resultId) == null)
            {
              this.addNode(visService);
            }
          }
          // now we can use the service to register on events
          this.visNetworkService.on(this.visNetwork, 'click');
        }

        // open your console/dev tools to see the click params
        this.visNetworkService.click
        .subscribe((eventData: any[]) => {
          if (this.firstT)
          {
            if (eventData[0] === this.visNetwork && (this.visNetworkService.getSelectedNodes(this.visNetwork))[0] != null) {
              this.myServiceId = (this.visNetworkService.getSelectedNodes(this.visNetwork))[0];
              var footer = document.getElementsByClassName('footer');
              console.log(footer);
              footer[1].removeAttribute("hidden");
              this.boolFooterVisible = true;
            }
          }
        });
        
  }

  getVal(event){
    console.log(event.id);
    var footer = document.getElementsByClassName('footer');
    footer[1].setAttribute("hidden", "true");
    this.boolFooterVisible = false;
    this.navCtrl.push('ServiceDetailsPage', {
      param1: event.id,
    });
    this.placeholder="";
  }

  public more(){
    if (this.firstT)
    {
      var footer = document.getElementsByClassName('footer');
      footer[1].setAttribute("hidden", "true");
      this.boolFooterVisible = false;
      this.navCtrl.push(ServiceDetailsPage, {
        param1: this.myServiceId
      });
    }
  }

  login() {
    this.navCtrl.push('WelcomePage');
  }

  public ngOnInit(): void {
       
      const nodes = new VisNodes();

      const edges = new VisEdges();

      this.visNetworkData = {
          nodes,
          edges,
      };

      this.visNetworkOptions = {
        interaction:{
          multiselect: false
        },
        nodes: {
          borderWidth:50,
          shape:"circle", 
          font:{
            color:'#fff',
            size: 45,
            align: 'center',
            face: 'FontAwesome'
          },
        },
        groups: {

          //Groupés par marque
          // Marque id=0
          0:{font:{size:45}, color:{border:'#10e51a', background:'#10e51a', highlight:{ border:'#0eae15', background:'#0eae15' }}},
          1:{font:{size:65}, color:{border:'#10e51a', background:'#10e51a', highlight:{ border:'#0eae15', background:'#0eae15' }}},
          2:{font:{size:85}, color:{border:'#10e51a', background:'#10e51a', highlight:{ border:'#0eae15', background:'#0eae15' }}},

          // Marque id=1
          3:{font:{size:45}, color:{border:'#f71b1b', background:'#f71b1b', highlight:{ border:'#d01717', background:'#d01717' }}},
          4:{font:{size:65}, color:{border:'#f71b1b', background:'#f71b1b', highlight:{ border:'#d01717', background:'#d01717' }}},
          5:{font:{size:85}, color:{border:'#f71b1b', background:'#f71b1b', highlight:{ border:'#d01717', background:'#d01717' }}},

          // Marque id=2
          6:{font:{size:45}, color:{border:'#488aff', background:'#488aff', highlight:{ border:'#386ecd', background:'#386ecd' }}},
          7:{font:{size:65}, color:{border:'#488aff',background:'#488aff', highlight:{ border:'#386ecd', background:'#386ecd' }}},
          8:{font:{size:85}, color:{border:'#488aff', background:'#488aff', highlight:{ border:'#386ecd', background:'#386ecd' }}},

          // Marque id=3
          9:{font:{size:45}, color:{border:'#e5dd10', background:'#e5dd10', highlight:{ border:'#cbc40e', background:'#cbc40e' }}},
          10:{font:{size:65}, color:{border:'#e5dd10', background:'#e5dd10', highlight:{ border:'#cbc40e', background:'#cbc40e' }}},
          11:{font:{size:85}, color:{border:'#e5dd10', background:'#e5dd10', highlight:{ border:'#cbc40e', background:'#cbc40e' }}},

          // Marque id=4
          12:{font:{size:45}, color:{border:'#f08640', background:'#f08640', highlight:{ border:'#cc7136', background:'#cc7136' }}},
          13:{font:{size:65}, color:{border:'#f08640', background:'#f08640', highlight:{ border:'#cc7136', background:'#cc7136' }}},
          14:{font:{size:85}, color:{border:'#f08640', background:'#f08640', highlight:{ border:'#cc7136', background:'#cc7136' }}},

          // Marque id=5
          15:{font:{size:45}, color:{border:'#b734f4', background:'#b734f4', highlight:{ border:'#962ac8', background:'#962ac8' }}},
          16:{font:{size:65}, color:{border:'#b734f4', background:'#b734f4', highlight:{ border:'#962ac8', background:'#962ac8' }}},
          17:{font:{size:85}, color:{border:'#b734f4', background:'#b734f4', highlight:{ border:'#962ac8', background:'#962ac8' }}},

          // Marque id=6
          18:{font:{size:45}, color:{border:'#f92c55', background:'#f92c55', highlight:{ border:'#d42649', background:'#d42649' }}},
          19:{font:{size:65}, color:{border:'#f92c55', background:'#f92c55', highlight:{ border:'#d42649', background:'#d42649' }}},
          20:{font:{size:85}, color:{border:'#f92c55', background:'#f92c55', highlight:{ border:'#d42649', background:'#d42649' }}},
        },
        physics: {
          stabilization: false,
          minVelocity:  0.01,
          solver: "repulsion",
          repulsion: {
            nodeDistance: 75
          }
        },
      };
  }

  
  public ngOnDestroy(): void {
    this.visNetworkService.off(this.visNetwork, 'click');
    console.log(this.visNetworkData.nodes);
    this.firstT = false;
  }

  prev(){
    this.visNetworkService.off(this.visNetwork, 'click');
    this.visNetworkData.nodes.clear();
    var footer = document.getElementsByClassName('footer');
    console.log(this.boolFooterVisible);
    if (this.boolFooterVisible){
      footer[1].setAttribute("hidden", "true");
    }
    this.navCtrl.pop();
  }
}
