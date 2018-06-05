import { Component, ViewChild } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { Http } from '@angular/http';

import { GencodePage } from "../gencode/gencode";

type Package = {
  name:string;
  types:Array<{name:string, enabled:boolean, export?:boolean, alias?:string}>;
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
      name:"java.lang",
      types: [
        {name:"String", enabled:true},
        {name:"Iterable", enabled:true},
        {name:"Comparable", enabled:true},
      ]
    },
    {
      name:"java.util",
      types:[
        {name:"Iterator", enabled:true},
        {name:"Collection", enabled:true},
        {name:"List", enabled:true},
        {name:"Set", enabled:true},
        {name:"Map", enabled:true},
        {name:"Stack", enabled:true},
        {name:"Arrays", enabled:true, export:true},
        //{name:"Base64", enabled:true},
        {name:"Collections", enabled:true, export:true},
        {name:"Optional", enabled:true, export:true}, 

        ]
    },
    {
      name:"java.util.stream",
      types:[
        {name:"Stream", enabled:true, export:true}, 
        {name:"Collectors", enabled:true, export:true}, 
      ]
    },
    {
      name:"java.util.function",
      types: [
        {name:"Function", enabled:true, alias:"Func"},
        {name:"BiFunction", enabled:true, alias:"BiFunction"},
        {name:"Consumer", enabled:true, alias:"Consumer"},
        {name:"BiConsumer", enabled:true, alias:"BiConsumer"},
        {name:"UnaryOperator", enabled:true, alias:"UnaryOperator"},
        {name:"BinaryOperator", enabled:true, alias:"BinaryOperator"},
        {name:"Predicate", enabled:true, alias:"Predicate"},
        {name:"BiPredicate", enabled:true, alias:"BiPredicate"},
        {name:"Supplier", enabled:true, alias:"Supplier"},
      ]
    },
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
        res => this.events.publish( "gencode:complete", res.json()),
        err => console.log( err )
      )
  }

}
