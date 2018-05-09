
import {
  Optional,
  TypescriptConverter,
  Class,
  Collectors,
  Stream,
  Arrays,
  TSType
} from "ts/demo-types";

import { HashMap } from "ts/collections";


type Type = {name:string, export?:boolean, enabled:boolean, alias?:string}

type Pkg = {
  name:string;
  types:Array<Type>;
}

function convert( model:string ):string {

  let packages = JSON.parse( model ) as [Pkg];

  let res = _convert( packages );

  return JSON.stringify( res );
}

function _convert( packages:[Pkg] ):[string,string] {

  let declaredTypesMap = new HashMap<string,org.bsc.java2typescript.TSType>();

  packages
    .forEach( p => {
      p.types.filter( t => t.enabled ).forEach( t => {
          let clazz = Class.forName(p.name + "." + t.name) ;
          //print( "process", clazz );

          let ts = (t.alias) ?
            TSType.from( clazz, t.alias as string, t.export || false ) :
            TSType.from( clazz, t.export || false )
            ;


          declaredTypesMap.put( clazz.getName(), ts );
      });
    });

    let converter = new TypescriptConverter();

    let decl = declaredTypesMap.values().stream()
      .map( t => converter.processClass( 0, t, declaredTypesMap) )
      .collect<string>( Collectors.joining( "\n\n") )

    let sb0 = TypescriptConverter.loadDefaultDeclarations( Optional.empty() );

    sb0.append(decl);

    let defn = declaredTypesMap.values().stream()
      .filter( t => t.isExport())
      .map( t => converter.processStatic( t, declaredTypesMap) )
      .collect<string>( Collectors.joining( "\n\n") )

    let sb1 = TypescriptConverter.loadDefaultDefinition( Optional.empty() );
    sb1.append(defn);

    return [ sb0.toString(), sb1.toString() ];
}
