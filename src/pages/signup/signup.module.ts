import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { SignupPage } from './signup';

import { VisModule } from 'ng2-vis';

@NgModule({
  declarations: [
    SignupPage
  ],
  imports: [
    VisModule,
    IonicPageModule.forChild(SignupPage)
  ],
  exports: [
    SignupPage,
  ]
})
export class SignupPageModule { }
