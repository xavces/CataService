import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ServiceDetailsPage } from './serviceDetails';

import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

@NgModule({
  declarations: [
    ServiceDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ServiceDetailsPage)
  ],
  providers: [
    YoutubeVideoPlayer
  ],
  exports: [
    ServiceDetailsPage
  ]
})
export class ServiceDetailsPageModule { }
