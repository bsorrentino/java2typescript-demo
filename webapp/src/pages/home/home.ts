import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

type Package = {
  name:string;
  types:Array<{name:string, export?:boolean, functiona?:boolean}>;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

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

  constructor(public navCtrl: NavController) {

  }

  generate() {

    this.packages.forEach( p => {
      p.types.forEach( t => console.dir(t))
    })
  }

}
