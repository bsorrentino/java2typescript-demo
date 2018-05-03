
import {
  TypescriptConverter,
  Class,
  Collectors,
  Stream,
  Arrays,
  TSType
} from "ts/demo-types";

import { HashMap } from "ts/collections";


type Type = {name:string, export?:boolean, functiona?:boolean}

type Pkg = {
  name:string;
  types:Array<Type>;
}

function convert( model:string ):string {

  let packages = JSON.parse( model ) as [Pkg];

  //print( "packages.length", packages.length);

  let declaredTypesMap = new HashMap<string,org.bsc.java2typescript.TSType>();

  packages
    .forEach( p => {
      p.types.forEach( t => {
          let clazz = p.name + "." + t.name ;
          //print( "process", clazz );

          let ts = TSType.from( Class.forName(clazz), t.export || false )

          declaredTypesMap.put( clazz, ts );
      });
    });

    let converter = new TypescriptConverter();

    let result = declaredTypesMap.values().stream()
      .map( t => converter.processClass( 0, t, declaredTypesMap) )
      .collect<string>( Collectors.joining( "\n\n") )

    return result;
}
