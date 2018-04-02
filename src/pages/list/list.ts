import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, normalizeURL } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  @ViewChild('videoPlayer') videoPlayerElement: ElementRef;  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.videoPlayerElement.nativeElement.src = normalizeURL('assets/small.mp4');
  }

}