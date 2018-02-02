import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarqueDetailsPage } from './marqueDetails';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

@NgModule({
  declarations: [
    MarqueDetailsPage
  ],
  imports: [
    IonicPageModule.forChild(MarqueDetailsPage)
  ],
  providers: [
    YoutubeVideoPlayer
  ],
  exports: [
    MarqueDetailsPage,
  ]
})
export class MarqueDetailsPageModule { }
