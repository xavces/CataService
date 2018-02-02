import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Chat2Page } from './chat2';

@NgModule({
  declarations: [
    Chat2Page,
  ],
  imports: [
    IonicPageModule.forChild(Chat2Page)
  ],
  providers: [
    TextToSpeech,
  ],
  exports: [
    Chat2Page
  ]
})
export class Chat2PageModule { }
