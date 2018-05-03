import { Component, ViewChild } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { Http } from '@angular/http';

import { GencodePage } from "../gencode/gencode";

type Package = {
  name:string;
  types:Array<{name:string, export?:boolean}>;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  contentArea = GencodePage;

  @ViewChild("content") contentCtrl: NavController;

  result:string;

  packages:Array<Package> = [
    {
      name:"java.util",
      types:[
        {name:"Iterator"},
        {name:"List"},
        {name:"Set"},
        {name:"Map"},
        {name:"Stack"},
        {name:"Arrays", export:true},
        {name:"Base64"},
        {name:"Collections", export:true},
        {name:"Optional"}, 
      ],
    }
  ];

  constructor(public navCtrl: NavController, public http:Http, public events:Events) {

  }

  generate() {

    //let content = this.navCtrl.getActiveChildNav().root as GencodePage;
    //console.dir( content );

    this.packages.forEach( p => {
      p.types.forEach( t => console.dir(t))
    })
 
    this.result = "";
    this.http.post( "/translate", this.packages )
      .subscribe( 
        res => this.events.publish( "gencode:complete", res.text()),
        err => console.log( err )
      )
  }

}
