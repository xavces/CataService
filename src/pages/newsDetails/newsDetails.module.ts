import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { NewsDetailsPage } from './newsDetails';

@NgModule({
  declarations: [
    NewsDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsDetailsPage)
  ],
  exports: [
    NewsDetailsPage
  ]
})
export class NewsDetailsPageModule { }
