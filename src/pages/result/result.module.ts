import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { ResultPage } from './result';
import { SwingModule } from 'angular2-swing';
import { AutoCompleteModule } from 'ionic2-auto-complete';
import { CompleteTestService } from '../../providers/CompleteTestService';

import { VisModule } from 'ng2-vis';

@NgModule({
  declarations: [
    ResultPage,
  ],
  imports: [
    HttpModule,
    SwingModule,
    VisModule,
    AutoCompleteModule,
    IonicPageModule.forChild(ResultPage)
  ],
  providers: [
    CompleteTestService
  ],
  exports: [
    ResultPage
  ]
})

export class ResultPageModule { }
