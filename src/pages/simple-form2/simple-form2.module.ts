import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AutoCompleteModule } from 'ionic2-auto-complete';
import { CompleteTestService } from '../../providers/CompleteTestService';

import { SimpleForm2Page } from './simple-form2';

@NgModule({
  declarations: [
    SimpleForm2Page,
  ],
  imports: [
    AutoCompleteModule,
    IonicPageModule.forChild(SimpleForm2Page),
  ],
  providers: [
    CompleteTestService
  ],
  exports: [
    SimpleForm2Page
  ]
})
export class SimpleFormPageModule { }
