import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { TinderQ2Page } from './tinderQ2';
import { SwingModule } from 'angular2-swing';
import { AutoCompleteModule } from 'ionic2-auto-complete';
import { CompleteTestService } from '../../providers/CompleteTestService';

@NgModule({
  declarations: [
    TinderQ2Page,
  ],
  imports: [
    HttpModule,
    SwingModule,
    AutoCompleteModule,
    IonicPageModule.forChild(TinderQ2Page)
  ],
  providers: [
    CompleteTestService
  ],
  exports: [
    TinderQ2Page
  ]
})

export class TinderQ2PageModule { }
