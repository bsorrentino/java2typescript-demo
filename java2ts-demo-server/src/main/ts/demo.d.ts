//
// JAVA TYPESCRIPT DEDINITION
//


type int    = number;
type long   = number;
type float	= number;
type double = number;
type byte   = number;
type char   = string;

type chararray = [byte];
type bytearray = [char];

declare namespace java.lang {

	interface Class<T> {}
	interface AutoCloseable {}
	interface Cloneable {}

	type Object = any;
}

declare namespace java.util {

	interface RandomAccess {}
}

declare namespace java.io {

	interface Closeable {}
	interface Serializable {}
}


//
// Nashorn
//

declare function print( ...args: any[] ):void

declare function load( module:string ):void

declare namespace Java {

  export function type<T>( t:string):T;

  export function from<T>( list:java.util.List<T> ):Array<T> ;
  
}
interface BiConsumer<T, U>/*java.util.function.BiConsumer*/ {

	( arg0:T, arg1:U ):void;
	andThen?( arg0:BiConsumer<T, U> ):BiConsumer<T, U>;

} // end BiConsumer
declare namespace java.util {

interface Iterator<E> {

	forEachRemaining( arg0:Consumer<E> ):void;
	hasNext(  ):boolean;
	next(  ):E;
	remove(  ):void;

} // end Iterator

} // end namespace java.util
interface Consumer<T>/*java.util.function.Consumer*/ {

	( arg0:T ):void;
	andThen?( arg0:Consumer<T> ):Consumer<T>;

} // end Consumer
interface UnaryOperator<T>/*java.util.function.UnaryOperator extends Function<T, any>*/ {

	<R>( arg0:T ):R;
	// static identity<T>(  ):UnaryOperator<T>;
	andThen?<R,V>( arg0:Func<R, V> ):Func<T, V>;
	compose?<R,V>( arg0:Func<V, T> ):Func<V, R>;

} // end UnaryOperator
declare namespace java.util {

interface Map<K, V> {

	clear(  ):void;
	compute( arg0:K, arg1:BiFunction<K, V, V> ):V;
	computeIfAbsent( arg0:K, arg1:Func<K, V> ):V;
	computeIfPresent( arg0:K, arg1:BiFunction<K, V, V> ):V;
	containsKey( arg0:any /*java.lang.Object*/ ):boolean;
	containsValue( arg0:any /*java.lang.Object*/ ):boolean;
	entrySet(  ):Set<any /*java.util.Map$Entry*/>;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	forEach( arg0:BiConsumer<K, V> ):void;
	get( arg0:any /*java.lang.Object*/ ):V;
	getOrDefault( arg0:any /*java.lang.Object*/, arg1:V ):V;
	isEmpty(  ):boolean;
	keySet(  ):Set<K>;
	merge( arg0:K, arg1:V, arg2:BiFunction<V, V, V> ):V;
	put( arg0:K, arg1:V ):V;
	putAll( arg0:Map<K, V> ):void;
	putIfAbsent( arg0:K, arg1:V ):V;
	remove( arg0:any /*java.lang.Object*/ ):V;
	remove( arg0:any /*java.lang.Object*/, arg1:any /*java.lang.Object*/ ):boolean;
	replace( arg0:K, arg1:V ):V;
	replace( arg0:K, arg1:V, arg2:V ):boolean;
	replaceAll( arg0:BiFunction<K, V, V> ):void;
	size(  ):int;
	values(  ):Collection<V>;

} // end Map

} // end namespace java.util
interface Func<T, R>/*java.util.function.Function*/ {

	( arg0:T ):R;
	// static identity<T>(  ):Func<T, T>;
	andThen?<V>( arg0:Func<R, V> ):Func<T, V>;
	compose?<V>( arg0:Func<V, T> ):Func<V, R>;

} // end Func
interface Supplier<T>/*java.util.function.Supplier*/ {

	(  ):T;

} // end Supplier
declare namespace java.util {

interface Set<E>/* extends Collection<E>*/ {

	add( arg0:E ):boolean;
	addAll( arg0:Collection<E> ):boolean;
	clear(  ):void;
	contains( arg0:any /*java.lang.Object*/ ):boolean;
	containsAll( arg0:Collection<any /*java.lang.Object*/> ):boolean;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	forEach<T>( arg0:Consumer<T> ):void;
	isEmpty(  ):boolean;
	iterator(  ):Iterator<E>;
	parallelStream(  ):java.util.stream.Stream<E>;
	remove( arg0:any /*java.lang.Object*/ ):boolean;
	removeAll( arg0:Collection<any /*java.lang.Object*/> ):boolean;
	removeIf( arg0:Predicate<E> ):boolean;
	retainAll( arg0:Collection<any /*java.lang.Object*/> ):boolean;
	size(  ):int;
	spliterator(  ):any /*java.util.Spliterator*/;
	stream(  ):java.util.stream.Stream<E>;
	toArray(  ):[any /*java.lang.Object*/];
	toArray<T>( arg0:[T] ):[T];

} // end Set

} // end namespace java.util
interface BiFunction<T, U, R>/*java.util.function.BiFunction*/ {

	( arg0:T, arg1:U ):R;
	andThen?<V>( arg0:Func<R, V> ):BiFunction<T, U, V>;

} // end BiFunction
declare namespace java.util {

class Arrays/* extends java.lang.Object*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	toString(  ):string;

} // end Arrays

} // end namespace java.util
interface Runnable/*java.lang.Runnable*/ {

	(  ):void;

} // end Runnable
interface BiPredicate<T, U>/*java.util.function.BiPredicate*/ {

	( arg0:T, arg1:U ):boolean;
	and?( arg0:BiPredicate<T, U> ):BiPredicate<T, U>;
	negate?(  ):BiPredicate<T, U>;
	or?( arg0:BiPredicate<T, U> ):BiPredicate<T, U>;

} // end BiPredicate
declare namespace java.util {

class Collections/* extends java.lang.Object*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	toString(  ):string;

} // end Collections

} // end namespace java.util
declare namespace java.util.stream {

interface Stream<T>/* extends BaseStream<T, any>*/ {

	allMatch( arg0:Predicate<T> ):boolean;
	anyMatch( arg0:Predicate<T> ):boolean;
	close(  ):void;
	collect<R>( arg0:Supplier<R>, arg1:BiConsumer<R, T>, arg2:BiConsumer<R, R> ):R;
	collect<R>( arg0:any /*java.util.stream.Collector*/ ):R;
	count(  ):long;
	distinct(  ):Stream<T>;
	filter( arg0:Predicate<T> ):Stream<T>;
	findAny(  ):java.util.Optional<T>;
	findFirst(  ):java.util.Optional<T>;
	flatMap<R>( arg0:Func<T, Stream<R>> ):Stream<R>;
	flatMapToDouble( arg0:Func<T, any /*java.util.stream.DoubleStream*/> ):any /*java.util.stream.DoubleStream*/;
	flatMapToInt( arg0:Func<T, any /*java.util.stream.IntStream*/> ):any /*java.util.stream.IntStream*/;
	flatMapToLong( arg0:Func<T, any /*java.util.stream.LongStream*/> ):any /*java.util.stream.LongStream*/;
	forEach( arg0:Consumer<T> ):void;
	forEachOrdered( arg0:Consumer<T> ):void;
	isParallel(  ):boolean;
	iterator(  ):java.util.Iterator<T>;
	limit( arg0:long ):Stream<T>;
	map<R>( arg0:Func<T, R> ):Stream<R>;
	mapToDouble( arg0:any /*java.util.function.ToDoubleFunction*/ ):any /*java.util.stream.DoubleStream*/;
	mapToInt( arg0:any /*java.util.function.ToIntFunction*/ ):any /*java.util.stream.IntStream*/;
	mapToLong( arg0:any /*java.util.function.ToLongFunction*/ ):any /*java.util.stream.LongStream*/;
	max( arg0:any /*java.util.Comparator*/ ):java.util.Optional<T>;
	min( arg0:any /*java.util.Comparator*/ ):java.util.Optional<T>;
	noneMatch( arg0:Predicate<T> ):boolean;
	onClose<S>( arg0:Runnable ):S;
	parallel<S>(  ):S;
	peek( arg0:Consumer<T> ):Stream<T>;
	reduce( arg0:BinaryOperator<T> ):java.util.Optional<T>;
	reduce( arg0:T, arg1:BinaryOperator<T> ):T;
	reduce<U>( arg0:U, arg1:BiFunction<U, T, U>, arg2:BinaryOperator<U> ):U;
	sequential<S>(  ):S;
	skip( arg0:long ):Stream<T>;
	sorted(  ):Stream<T>;
	sorted( arg0:any /*java.util.Comparator*/ ):Stream<T>;
	spliterator(  ):any /*java.util.Spliterator*/;
	toArray(  ):[any /*java.lang.Object*/];
	toArray<A>( arg0:any /*java.util.function.IntFunction*/ ):[A];
	unordered<S>(  ):S;

} // end Stream

} // end namespace java.util.stream
declare namespace java.util {

interface Collection<E>/* extends java.lang.Iterable<E>*/ {

	add( arg0:E ):boolean;
	addAll( arg0:Collection<E> ):boolean;
	clear(  ):void;
	contains( arg0:any /*java.lang.Object*/ ):boolean;
	containsAll( arg0:Collection<any /*java.lang.Object*/> ):boolean;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	forEach<T>( arg0:Consumer<T> ):void;
	isEmpty(  ):boolean;
	iterator(  ):Iterator<E>;
	parallelStream(  ):java.util.stream.Stream<E>;
	remove( arg0:any /*java.lang.Object*/ ):boolean;
	removeAll( arg0:Collection<any /*java.lang.Object*/> ):boolean;
	removeIf( arg0:Predicate<E> ):boolean;
	retainAll( arg0:Collection<any /*java.lang.Object*/> ):boolean;
	size(  ):int;
	spliterator(  ):any /*java.util.Spliterator*/;
	stream(  ):java.util.stream.Stream<E>;
	toArray(  ):[any /*java.lang.Object*/];
	toArray<T>( arg0:[T] ):[T];

} // end Collection

} // end namespace java.util
declare namespace java.util {

interface List<E>/* extends Collection<E>*/ {

	add( arg0:E ):boolean;
	add( arg0:int, arg1:E ):void;
	addAll( arg0:Collection<E> ):boolean;
	addAll( arg0:int, arg1:Collection<E> ):boolean;
	clear(  ):void;
	contains( arg0:any /*java.lang.Object*/ ):boolean;
	containsAll( arg0:Collection<any /*java.lang.Object*/> ):boolean;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	forEach<T>( arg0:Consumer<T> ):void;
	get( arg0:int ):E;
	indexOf( arg0:any /*java.lang.Object*/ ):int;
	isEmpty(  ):boolean;
	iterator(  ):Iterator<E>;
	lastIndexOf( arg0:any /*java.lang.Object*/ ):int;
	listIterator(  ):any /*java.util.ListIterator*/;
	listIterator( arg0:int ):any /*java.util.ListIterator*/;
	parallelStream(  ):java.util.stream.Stream<E>;
	remove( arg0:any /*java.lang.Object*/ ):boolean;
	remove( arg0:int ):E;
	removeAll( arg0:Collection<any /*java.lang.Object*/> ):boolean;
	removeIf( arg0:Predicate<E> ):boolean;
	replaceAll( arg0:UnaryOperator<E> ):void;
	retainAll( arg0:Collection<any /*java.lang.Object*/> ):boolean;
	set( arg0:int, arg1:E ):E;
	size(  ):int;
	sort( arg0:any /*java.util.Comparator*/ ):void;
	spliterator(  ):any /*java.util.Spliterator*/;
	stream(  ):java.util.stream.Stream<E>;
	subList( arg0:int, arg1:int ):List<E>;
	toArray(  ):[any /*java.lang.Object*/];
	toArray<T>( arg0:[T] ):[T];

} // end List

} // end namespace java.util
declare namespace java.util.stream {

class Collectors/* extends java.lang.Object*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	toString(  ):string;

} // end Collectors

} // end namespace java.util.stream
declare namespace java.util {

class Optional<T>/* extends java.lang.Object*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	filter( arg0:Predicate<T> ):Optional<T>;
	flatMap<U>( arg0:Func<T, Optional<U>> ):Optional<U>;
	get(  ):T;
	ifPresent( arg0:Consumer<T> ):void;
	isPresent(  ):boolean;
	map<U>( arg0:Func<T, U> ):Optional<U>;
	orElse( arg0:T ):T;
	orElseGet( arg0:Supplier<T> ):T;
	orElseThrow<X>( arg0:Supplier<X> ):T;
	toString(  ):string;

} // end Optional

} // end namespace java.util
declare namespace org.bsc.java2typescript {

class TypescriptConverter/* extends java.lang.Object*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	getClassDecl( arg0:TSType, arg1:java.util.Map<string, TSType> ):string;
	getMethodParametersAndReturnDecl<E>( arg0:E, arg1:TSType, arg2:java.util.Map<string, TSType>, arg3:boolean ):string;
	processClass( arg0:int, arg1:TSType, arg2:java.util.Map<string, TSType> ):string;
	processStatic( arg0:TSType, arg1:java.util.Map<string, TSType> ):string;
	toString(  ):string;

} // end TypescriptConverter

} // end namespace org.bsc.java2typescript
declare namespace java.lang {

interface Iterable<T> {

	(  ):java.util.Iterator<T>;
	forEach?( arg0:Consumer<T> ):void;
	spliterator?(  ):any /*java.util.Spliterator*/;

} // end Iterable

} // end namespace java.lang
declare namespace java.lang {

interface Comparable<T> {

	( arg0:T ):int;

} // end Comparable

} // end namespace java.lang
declare namespace org.bsc.java2typescript {

class TSType/* extends java.util.HashMap<any, any>*/ {

	clear(  ):void;
	clone(  ):any /*java.lang.Object*/;
	compute<K,V>( arg0:K, arg1:BiFunction<K, V, V> ):V;
	computeIfAbsent<K,V>( arg0:K, arg1:Func<K, V> ):V;
	computeIfPresent<K,V>( arg0:K, arg1:BiFunction<K, V, V> ):V;
	containsKey( arg0:any /*java.lang.Object*/ ):boolean;
	containsValue( arg0:any /*java.lang.Object*/ ):boolean;
	entrySet(  ):java.util.Set<any /*java.util.Map$Entry*/>;
	equals( o:any /*java.lang.Object*/ ):boolean;
	forEach<K,V>( arg0:BiConsumer<K, V> ):void;
	get<V>( arg0:any /*java.lang.Object*/ ):V;
	getAlias(  ):string;
	getFields(  ):java.util.Set<any /*java.lang.reflect.Field*/>;
	getMethods(  ):java.util.Set<any /*java.lang.reflect.Method*/>;
	getNamespace(  ):string;
	getOrDefault<V>( arg0:any /*java.lang.Object*/, arg1:V ):V;
	getSimpleTypeName(  ):string;
	getTypeName(  ):string;
	getValue(  ):java.lang.Class<any /*java.lang.Object*/>;
	hasAlias(  ):boolean;
	isEmpty(  ):boolean;
	isExport(  ):boolean;
	isFunctionalInterface(  ):boolean;
	keySet<K>(  ):java.util.Set<K>;
	merge<K,V>( arg0:K, arg1:V, arg2:BiFunction<V, V, V> ):V;
	put<K,V>( arg0:K, arg1:V ):V;
	putAll<K,V>( arg0:java.util.Map<K, V> ):void;
	putIfAbsent<K,V>( arg0:K, arg1:V ):V;
	remove( arg0:any /*java.lang.Object*/, arg1:any /*java.lang.Object*/ ):boolean;
	remove<V>( arg0:any /*java.lang.Object*/ ):V;
	replace<K,V>( arg0:K, arg1:V ):V;
	replace<K,V>( arg0:K, arg1:V, arg2:V ):boolean;
	replaceAll<K,V>( arg0:BiFunction<K, V, V> ):void;
	setExport( exports:boolean ):TSType;
	size(  ):int;
	supportNamespace(  ):boolean;
	toString(  ):string;
	values<V>(  ):java.util.Collection<V>;

} // end TSType

} // end namespace org.bsc.java2typescript
interface BinaryOperator<T>/*java.util.function.BinaryOperator extends BiFunction<T, any, any>*/ {

	<R,U>( arg0:T, arg1:U ):R;
	// static maxBy<T>( arg0:any /*java.util.Comparator*/ ):BinaryOperator<T>;
	// static minBy<T>( arg0:any /*java.util.Comparator*/ ):BinaryOperator<T>;
	andThen?<R,U,V>( arg0:Func<R, V> ):BiFunction<T, U, V>;

} // end BinaryOperator
declare namespace java.lang {

class String/* extends Object implements java.io.Serializable, Comparable<any>, CharSequence*/ {

	charAt( arg0:int ):any /*char*/;
	chars(  ):any /*java.util.stream.IntStream*/;
	codePointAt( arg0:int ):int;
	codePointBefore( arg0:int ):int;
	codePointCount( arg0:int, arg1:int ):int;
	codePoints(  ):any /*java.util.stream.IntStream*/;
	compareTo( arg0:string ):int;
	compareToIgnoreCase( arg0:string ):int;
	concat( arg0:string ):string;
	contains( arg0:any /*java.lang.CharSequence*/ ):boolean;
	contentEquals( arg0:any /*java.lang.CharSequence*/ ):boolean;
	contentEquals( arg0:any /*java.lang.StringBuffer*/ ):boolean;
	endsWith( arg0:string ):boolean;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	equalsIgnoreCase( arg0:string ):boolean;
	getBytes(  ):bytearray;
	getBytes( arg0:any /*java.nio.charset.Charset*/ ):bytearray;
	getBytes( arg0:int, arg1:int, arg2:bytearray, arg3:int ):void;
	getBytes( arg0:string ):bytearray;
	getChars( arg0:int, arg1:int, arg2:chararray, arg3:int ):void;
	indexOf( arg0:int ):int;
	indexOf( arg0:int, arg1:int ):int;
	indexOf( arg0:string ):int;
	indexOf( arg0:string, arg1:int ):int;
	intern(  ):string;
	isEmpty(  ):boolean;
	lastIndexOf( arg0:int ):int;
	lastIndexOf( arg0:int, arg1:int ):int;
	lastIndexOf( arg0:string ):int;
	lastIndexOf( arg0:string, arg1:int ):int;
	length(  ):int;
	matches( arg0:string ):boolean;
	offsetByCodePoints( arg0:int, arg1:int ):int;
	regionMatches( arg0:boolean, arg1:int, arg2:string, arg3:int, arg4:int ):boolean;
	regionMatches( arg0:int, arg1:string, arg2:int, arg3:int ):boolean;
	replace( arg0:any /*char*/, arg1:any /*char*/ ):string;
	replace( arg0:any /*java.lang.CharSequence*/, arg1:any /*java.lang.CharSequence*/ ):string;
	replaceAll( arg0:string, arg1:string ):string;
	replaceFirst( arg0:string, arg1:string ):string;
	split( arg0:string ):[string];
	split( arg0:string, arg1:int ):[string];
	startsWith( arg0:string ):boolean;
	startsWith( arg0:string, arg1:int ):boolean;
	subSequence( arg0:int, arg1:int ):any /*java.lang.CharSequence*/;
	substring( arg0:int ):string;
	substring( arg0:int, arg1:int ):string;
	toCharArray(  ):chararray;
	toLowerCase(  ):string;
	toLowerCase( arg0:any /*java.util.Locale*/ ):string;
	toString(  ):string;
	toUpperCase(  ):string;
	toUpperCase( arg0:any /*java.util.Locale*/ ):string;
	trim(  ):string;

} // end String

} // end namespace java.lang
interface Predicate<T>/*java.util.function.Predicate*/ {

	( arg0:T ):boolean;
	// static isEqual<T>( arg0:any /*java.lang.Object*/ ):Predicate<T>;
	and?( arg0:Predicate<T> ):Predicate<T>;
	negate?(  ):Predicate<T>;
	or?( arg0:Predicate<T> ):Predicate<T>;

} // end Predicate
