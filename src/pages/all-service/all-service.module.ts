import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllServicePage } from './all-service';
import { HttpModule } from '@angular/http';
import { SwingModule } from 'angular2-swing';
import { AutoCompleteModule } from 'ionic2-auto-complete';
import { CompleteTestService } from '../../providers/CompleteTestService';

@NgModule({
  declarations: [
    AllServicePage,
  ],
  imports: [
    HttpModule,
    SwingModule,
    AutoCompleteModule,
    IonicPageModule.forChild(AllServicePage)
  ],
  providers: [
    CompleteTestService
  ],
  exports: [
    AllServicePage
  ]
})
export class AllServicePageModule {}
