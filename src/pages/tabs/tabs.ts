import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Tab1Root } from '../pages';
import { Tab2Root } from '../pages';
import { Tab3Root } from '../pages';
import { AllServicePage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = Tab1Root;
  tab2Root: any = Tab2Root;
  tab3Root: any = Tab3Root;
  tab4Root: any = AllServicePage;


  tab1Title = " ";
  tab2Title = " ";
  tab3Title = " ";
  tab4Title = " ";

  constructor(public navCtrl: NavController) {
    console.log(this.tab2Root);
  }
}
