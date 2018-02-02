import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AutoCompleteModule } from 'ionic2-auto-complete';
import { CompleteTestService } from '../../providers/CompleteTestService';

import { SimpleForm1Page } from './simple-form1';

@NgModule({
  declarations: [
    SimpleForm1Page,
  ],
  imports: [
    AutoCompleteModule,
    IonicPageModule.forChild(SimpleForm1Page),
  ],
  providers: [
    CompleteTestService
  ],
  exports: [
    SimpleForm1Page
  ]
})
export class SimpleFormPageModule { }
