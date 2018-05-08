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
  
  hideDeclarations = false;
  hideDefinitions = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public events:Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GencodePage');

    this.events.subscribe( "gencode:complete", ( [decl, defn] )=> {
      console.log( "set code");

      let odecl:any = document.getElementById("code_decl");
      let odefn:any = document.getElementById("code_defn");

      odecl._codemirror.setValue(decl);
      odefn._codemirror.setValue(defn);

    })
  }

  toggleDeclarations() {
    this.hideDeclarations = !this.hideDeclarations;
  }

  toggleDefinitions() {
    this.hideDefinitions = !this.hideDefinitions;
  }
  
}
