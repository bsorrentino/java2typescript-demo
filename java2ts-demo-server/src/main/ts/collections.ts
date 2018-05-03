
interface HashMapStatic {
  new<K,V>():java.util.Map<K,V>;
  new<K,V>( initialCapacity:int ):java.util.Map<K,V>;

}


export const HashMap: HashMapStatic = Java.type("java.util.HashMap");
