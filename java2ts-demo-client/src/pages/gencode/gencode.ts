import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the GencodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gencode',
  templateUrl: 'gencode.html',
})
export class GencodePage {
  
  result = ""

  constructor(public navCtrl: NavController, public navParams: NavParams, public events:Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GencodePage');

    this.events.subscribe( "gencode:complete", ( code )=> {
      this.result = code;
    })
  }

}
