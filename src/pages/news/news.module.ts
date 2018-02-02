import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { NewsPage } from './news';

import { AutoCompleteModule } from 'ionic2-auto-complete';
import { CompleteNewsService } from '../../providers/CompleteNewsService';
@NgModule({
  declarations: [
    NewsPage,
  ],
  imports: [
    AutoCompleteModule,
    IonicPageModule.forChild(NewsPage)
  ],
  providers: [
    CompleteNewsService
  ],
  exports: [
    NewsPage
  ]
})
export class NewsPageModule { }
