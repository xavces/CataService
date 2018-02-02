import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AutoCompleteModule } from 'ionic2-auto-complete';
import { CompleteTestService } from '../../providers/CompleteTestService';

import { SimpleFormPage } from './simple-form';

@NgModule({
  declarations: [
    SimpleFormPage,
  ],
  imports: [
    AutoCompleteModule,
    IonicPageModule.forChild(SimpleFormPage),
  ],
  providers: [
    CompleteTestService
  ],
  exports: [
    SimpleFormPage
  ]
})
export class SimpleFormPageModule { }
