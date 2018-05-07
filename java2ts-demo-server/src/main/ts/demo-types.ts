//
// EXPORT DECLARATIONS
// 
//

/// <reference path="demo.d.ts"/>

interface OptionalStatic {

	readonly class:any;
	empty<T>(  ):java.util.Optional<T>;
	of<T>( arg0:T ):java.util.Optional<T>;
	ofNullable<T>( arg0:T ):java.util.Optional<T>;
}

export const Optional: OptionalStatic = Java.type("java.util.Optional");


interface ClassStatic {

	readonly class:any;
	forName( arg0:string ):java.lang.Class<any /*java.lang.Object*/>;
	forName( arg0:string, arg1:boolean, arg2:any /*java.lang.ClassLoader*/ ):java.lang.Class<any /*java.lang.Object*/>;
}

export const Class: ClassStatic = Java.type("java.lang.Class");


interface CollectorsStatic {

	readonly class:any;
	averagingDouble( arg0:any /*java.util.function.ToDoubleFunction*/ ):any /*java.util.stream.Collector*/;
	averagingInt( arg0:any /*java.util.function.ToIntFunction*/ ):any /*java.util.stream.Collector*/;
	averagingLong( arg0:any /*java.util.function.ToLongFunction*/ ):any /*java.util.stream.Collector*/;
	collectingAndThen<RR,R>( arg0:any /*java.util.stream.Collector*/, arg1:Func<R, RR> ):any /*java.util.stream.Collector*/;
	counting(  ):any /*java.util.stream.Collector*/;
	groupingBy<K,T,M>( arg0:Func<T, K>, arg1:Supplier<M>, arg2:any /*java.util.stream.Collector*/ ):any /*java.util.stream.Collector*/;
	groupingBy<K,T>( arg0:Func<T, K>, arg1:any /*java.util.stream.Collector*/ ):any /*java.util.stream.Collector*/;
	groupingBy<K,T>( arg0:Func<T, K> ):any /*java.util.stream.Collector*/;
	groupingByConcurrent<K,T>( arg0:Func<T, K> ):any /*java.util.stream.Collector*/;
	groupingByConcurrent<K,T>( arg0:Func<T, K>, arg1:any /*java.util.stream.Collector*/ ):any /*java.util.stream.Collector*/;
	groupingByConcurrent<K,T,M>( arg0:Func<T, K>, arg1:Supplier<M>, arg2:any /*java.util.stream.Collector*/ ):any /*java.util.stream.Collector*/;
	joining( arg0:any /*java.lang.CharSequence*/, arg1:any /*java.lang.CharSequence*/, arg2:any /*java.lang.CharSequence*/ ):any /*java.util.stream.Collector*/;
	joining(  ):any /*java.util.stream.Collector*/;
	joining( arg0:any /*java.lang.CharSequence*/ ):any /*java.util.stream.Collector*/;
	mapping<T,U>( arg0:Func<T, U>, arg1:any /*java.util.stream.Collector*/ ):any /*java.util.stream.Collector*/;
	maxBy( arg0:any /*java.util.Comparator*/ ):any /*java.util.stream.Collector*/;
	minBy( arg0:any /*java.util.Comparator*/ ):any /*java.util.stream.Collector*/;
	partitioningBy<T>( arg0:Predicate<T>, arg1:any /*java.util.stream.Collector*/ ):any /*java.util.stream.Collector*/;
	partitioningBy<T>( arg0:Predicate<T> ):any /*java.util.stream.Collector*/;
	reducing<T>( arg0:T, arg1:BinaryOperator<T> ):any /*java.util.stream.Collector*/;
	reducing<T>( arg0:BinaryOperator<T> ):any /*java.util.stream.Collector*/;
	reducing<T,U>( arg0:U, arg1:Func<T, U>, arg2:BinaryOperator<U> ):any /*java.util.stream.Collector*/;
	summarizingDouble( arg0:any /*java.util.function.ToDoubleFunction*/ ):any /*java.util.stream.Collector*/;
	summarizingInt( arg0:any /*java.util.function.ToIntFunction*/ ):any /*java.util.stream.Collector*/;
	summarizingLong( arg0:any /*java.util.function.ToLongFunction*/ ):any /*java.util.stream.Collector*/;
	summingDouble( arg0:any /*java.util.function.ToDoubleFunction*/ ):any /*java.util.stream.Collector*/;
	summingInt( arg0:any /*java.util.function.ToIntFunction*/ ):any /*java.util.stream.Collector*/;
	summingLong( arg0:any /*java.util.function.ToLongFunction*/ ):any /*java.util.stream.Collector*/;
	toCollection<C>( arg0:Supplier<C> ):any /*java.util.stream.Collector*/;
	toConcurrentMap<K,T,U>( arg0:Func<T, K>, arg1:Func<T, U> ):any /*java.util.stream.Collector*/;
	toConcurrentMap<K,T,U>( arg0:Func<T, K>, arg1:Func<T, U>, arg2:BinaryOperator<U> ):any /*java.util.stream.Collector*/;
	toConcurrentMap<K,T,U,M>( arg0:Func<T, K>, arg1:Func<T, U>, arg2:BinaryOperator<U>, arg3:Supplier<M> ):any /*java.util.stream.Collector*/;
	toList(  ):any /*java.util.stream.Collector*/;
	toMap<K,T,U,M>( arg0:Func<T, K>, arg1:Func<T, U>, arg2:BinaryOperator<U>, arg3:Supplier<M> ):any /*java.util.stream.Collector*/;
	toMap<K,T,U>( arg0:Func<T, K>, arg1:Func<T, U>, arg2:BinaryOperator<U> ):any /*java.util.stream.Collector*/;
	toMap<K,T,U>( arg0:Func<T, K>, arg1:Func<T, U> ):any /*java.util.stream.Collector*/;
	toSet(  ):any /*java.util.stream.Collector*/;
}

export const Collectors: CollectorsStatic = Java.type("java.util.stream.Collectors");


interface TypescriptConverterStatic {

	readonly class:any;
	new(  ):org.bsc.java2typescript.TypescriptConverter;
	convertJavaToTS<M>( type:any /*java.lang.reflect.Type*/, declaringMember:M, declaringType:org.bsc.java2typescript.TSType, declaredTypeMap:java.util.Map<string, org.bsc.java2typescript.TSType>, packageResolution:boolean, onTypeMismatch:java.util.Optional<Consumer<any /*java.lang.reflect.TypeVariable*/>> ):string;
	distinctByKey<T>( keyExtractor:Func<T, any /*java.lang.Object*/> ):Predicate<T>;
	getParameterName( p:any /*java.lang.reflect.Parameter*/ ):string;
	isFunctionalInterface( c:java.lang.Class<any /*java.lang.Object*/> ):boolean;
	isStatic<M>( m:M ):boolean;
	loadDefaultDeclarations( sb:java.util.Optional<any /*java.lang.StringBuilder*/> ):any /*java.lang.StringBuilder*/;
	loadDefaultDefinition( sb:java.util.Optional<any /*java.lang.StringBuilder*/> ):any /*java.lang.StringBuilder*/;
	processFunctionalInterface( type:org.bsc.java2typescript.TSType ):string;
}

export const TypescriptConverter: TypescriptConverterStatic = Java.type("org.bsc.java2typescript.TypescriptConverter");


interface IterableStatic {

	readonly class:any;
}

export const Iterable: IterableStatic = Java.type("java.lang.Iterable");


interface StreamStatic {

	readonly class:any;
	builder(  ):any /*java.util.stream.Stream$Builder*/;
	concat<T>( arg0:java.util.stream.Stream<T>, arg1:java.util.stream.Stream<T> ):java.util.stream.Stream<T>;
	empty<T>(  ):java.util.stream.Stream<T>;
	generate<T>( arg0:Supplier<T> ):java.util.stream.Stream<T>;
	iterate<T>( arg0:T, arg1:UnaryOperator<T> ):java.util.stream.Stream<T>;
	of<T>( ...arg0:T[] ):java.util.stream.Stream<T>;
	of<T>( arg0:T ):java.util.stream.Stream<T>;
}

export const Stream: StreamStatic = Java.type("java.util.stream.Stream");


interface TSTypeStatic {

	readonly class:any;
	from( cl:java.lang.Class<any /*java.lang.Object*/>, exports:boolean ):org.bsc.java2typescript.TSType;
	from( cl:java.lang.Class<any /*java.lang.Object*/>, alias:string, exports:boolean ):org.bsc.java2typescript.TSType;
	from( cl:java.lang.Class<any /*java.lang.Object*/> ):org.bsc.java2typescript.TSType;
}

export const TSType: TSTypeStatic = Java.type("org.bsc.java2typescript.TSType");


interface IteratorStatic {

	readonly class:any;
}

export const Iterator: IteratorStatic = Java.type("java.util.Iterator");


interface StringStatic {

	readonly class:any;
	new( arg0:bytearray, arg1:int, arg2:int ):string;
	new( arg0:bytearray, arg1:any /*java.nio.charset.Charset*/ ):string;
	new( arg0:bytearray, arg1:string ):string;
	new( arg0:bytearray, arg1:int, arg2:int, arg3:any /*java.nio.charset.Charset*/ ):string;
	new( arg0:bytearray, arg1:int, arg2:int, arg3:string ):string;
	new( arg0:any /*java.lang.StringBuilder*/ ):string;
	new( arg0:any /*java.lang.StringBuffer*/ ):string;
	new( arg0:bytearray ):string;
	new( arg0:[int], arg1:int, arg2:int ):string;
	new(  ):string;
	new( arg0:chararray ):string;
	new( arg0:string ):string;
	new( arg0:chararray, arg1:int, arg2:int ):string;
	new( arg0:bytearray, arg1:int ):string;
	new( arg0:bytearray, arg1:int, arg2:int, arg3:int ):string;
	copyValueOf( arg0:chararray, arg1:int, arg2:int ):string;
	copyValueOf( arg0:chararray ):string;
	format( arg0:any /*java.util.Locale*/, arg1:string, ...arg2:any /*java.lang.Object*/[] ):string;
	format( arg0:string, ...arg1:any /*java.lang.Object*/[] ):string;
	join( arg0:any /*java.lang.CharSequence*/, ...arg1:any /*java.lang.CharSequence*/[] ):string;
	join( arg0:any /*java.lang.CharSequence*/, arg1:java.lang.Iterable<any /*java.lang.CharSequence*/> ):string;
	valueOf( arg0:long ):string;
	valueOf( arg0:any /*char*/ ):string;
	valueOf( arg0:any /*java.lang.Object*/ ):string;
	valueOf( arg0:boolean ):string;
	valueOf( arg0:chararray, arg1:int, arg2:int ):string;
	valueOf( arg0:chararray ):string;
	valueOf( arg0:double ):string;
	valueOf( arg0:float ):string;
	valueOf( arg0:int ):string;
}

export const String: StringStatic = Java.type("java.lang.String");


interface ArraysStatic {

	readonly class:any;
	asList<T>( ...arg0:T[] ):java.util.List<T>;
	binarySearch( arg0:[double], arg1:int, arg2:int, arg3:double ):int;
	binarySearch( arg0:[int], arg1:int ):int;
	binarySearch( arg0:[int], arg1:int, arg2:int, arg3:int ):int;
	binarySearch( arg0:[long], arg1:int, arg2:int, arg3:long ):int;
	binarySearch( arg0:[long], arg1:long ):int;
	binarySearch( arg0:bytearray, arg1:any /*byte*/ ):int;
	binarySearch( arg0:[any /*java.lang.Object*/], arg1:any /*java.lang.Object*/ ):int;
	binarySearch( arg0:[float], arg1:int, arg2:int, arg3:float ):int;
	binarySearch( arg0:[float], arg1:float ):int;
	binarySearch( arg0:chararray, arg1:any /*char*/ ):int;
	binarySearch( arg0:bytearray, arg1:int, arg2:int, arg3:any /*byte*/ ):int;
	binarySearch<T>( arg0:[T], arg1:T, arg2:any /*java.util.Comparator*/ ):int;
	binarySearch( arg0:[any /*short*/], arg1:int, arg2:int, arg3:any /*short*/ ):int;
	binarySearch( arg0:[double], arg1:double ):int;
	binarySearch<T>( arg0:[T], arg1:int, arg2:int, arg3:T, arg4:any /*java.util.Comparator*/ ):int;
	binarySearch( arg0:chararray, arg1:int, arg2:int, arg3:any /*char*/ ):int;
	binarySearch( arg0:[any /*java.lang.Object*/], arg1:int, arg2:int, arg3:any /*java.lang.Object*/ ):int;
	binarySearch( arg0:[any /*short*/], arg1:any /*short*/ ):int;
	copyOf( arg0:[long], arg1:int ):[long];
	copyOf( arg0:[float], arg1:int ):[float];
	copyOf( arg0:chararray, arg1:int ):chararray;
	copyOf( arg0:[double], arg1:int ):[double];
	copyOf( arg0:[boolean], arg1:int ):[boolean];
	copyOf<T>( arg0:[T], arg1:int ):[T];
	copyOf<T,U>( arg0:[U], arg1:int, arg2:java.lang.Class<[T]> ):[T];
	copyOf( arg0:bytearray, arg1:int ):bytearray;
	copyOf( arg0:[int], arg1:int ):[int];
	copyOf( arg0:[any /*short*/], arg1:int ):[any /*short*/];
	copyOfRange<T,U>( arg0:[U], arg1:int, arg2:int, arg3:java.lang.Class<[T]> ):[T];
	copyOfRange( arg0:bytearray, arg1:int, arg2:int ):bytearray;
	copyOfRange( arg0:[any /*short*/], arg1:int, arg2:int ):[any /*short*/];
	copyOfRange( arg0:chararray, arg1:int, arg2:int ):chararray;
	copyOfRange<T>( arg0:[T], arg1:int, arg2:int ):[T];
	copyOfRange( arg0:[boolean], arg1:int, arg2:int ):[boolean];
	copyOfRange( arg0:[double], arg1:int, arg2:int ):[double];
	copyOfRange( arg0:[float], arg1:int, arg2:int ):[float];
	copyOfRange( arg0:[int], arg1:int, arg2:int ):[int];
	copyOfRange( arg0:[long], arg1:int, arg2:int ):[long];
	deepEquals( arg0:[any /*java.lang.Object*/], arg1:[any /*java.lang.Object*/] ):boolean;
	deepHashCode( arg0:[any /*java.lang.Object*/] ):int;
	deepToString( arg0:[any /*java.lang.Object*/] ):string;
	equals( arg0:bytearray, arg1:bytearray ):boolean;
	equals( arg0:[boolean], arg1:[boolean] ):boolean;
	equals( arg0:[double], arg1:[double] ):boolean;
	equals( arg0:[float], arg1:[float] ):boolean;
	equals( arg0:[any /*java.lang.Object*/], arg1:[any /*java.lang.Object*/] ):boolean;
	equals( arg0:[any /*short*/], arg1:[any /*short*/] ):boolean;
	equals( arg0:[int], arg1:[int] ):boolean;
	equals( arg0:[long], arg1:[long] ):boolean;
	equals( arg0:chararray, arg1:chararray ):boolean;
	fill( arg0:[double], arg1:int, arg2:int, arg3:double ):void;
	fill( arg0:[float], arg1:float ):void;
	fill( arg0:[any /*short*/], arg1:any /*short*/ ):void;
	fill( arg0:[double], arg1:double ):void;
	fill( arg0:[long], arg1:long ):void;
	fill( arg0:[any /*short*/], arg1:int, arg2:int, arg3:any /*short*/ ):void;
	fill( arg0:chararray, arg1:int, arg2:int, arg3:any /*char*/ ):void;
	fill( arg0:bytearray, arg1:int, arg2:int, arg3:any /*byte*/ ):void;
	fill( arg0:bytearray, arg1:any /*byte*/ ):void;
	fill( arg0:[boolean], arg1:int, arg2:int, arg3:boolean ):void;
	fill( arg0:[int], arg1:int, arg2:int, arg3:int ):void;
	fill( arg0:[long], arg1:int, arg2:int, arg3:long ):void;
	fill( arg0:[int], arg1:int ):void;
	fill( arg0:[any /*java.lang.Object*/], arg1:int, arg2:int, arg3:any /*java.lang.Object*/ ):void;
	fill( arg0:[any /*java.lang.Object*/], arg1:any /*java.lang.Object*/ ):void;
	fill( arg0:[float], arg1:int, arg2:int, arg3:float ):void;
	fill( arg0:chararray, arg1:any /*char*/ ):void;
	fill( arg0:[boolean], arg1:boolean ):void;
	hashCode( arg0:[boolean] ):int;
	hashCode( arg0:bytearray ):int;
	hashCode( arg0:[float] ):int;
	hashCode( arg0:[double] ):int;
	hashCode( arg0:[long] ):int;
	hashCode( arg0:[int] ):int;
	hashCode( arg0:[any /*short*/] ):int;
	hashCode( arg0:chararray ):int;
	hashCode( arg0:[any /*java.lang.Object*/] ):int;
	parallelPrefix( arg0:[double], arg1:any /*java.util.function.DoubleBinaryOperator*/ ):void;
	parallelPrefix( arg0:[double], arg1:int, arg2:int, arg3:any /*java.util.function.DoubleBinaryOperator*/ ):void;
	parallelPrefix( arg0:[int], arg1:any /*java.util.function.IntBinaryOperator*/ ):void;
	parallelPrefix( arg0:[long], arg1:any /*java.util.function.LongBinaryOperator*/ ):void;
	parallelPrefix( arg0:[long], arg1:int, arg2:int, arg3:any /*java.util.function.LongBinaryOperator*/ ):void;
	parallelPrefix<T>( arg0:[T], arg1:BinaryOperator<T> ):void;
	parallelPrefix<T>( arg0:[T], arg1:int, arg2:int, arg3:BinaryOperator<T> ):void;
	parallelPrefix( arg0:[int], arg1:int, arg2:int, arg3:any /*java.util.function.IntBinaryOperator*/ ):void;
	parallelSetAll( arg0:[int], arg1:any /*java.util.function.IntUnaryOperator*/ ):void;
	parallelSetAll( arg0:[double], arg1:any /*java.util.function.IntToDoubleFunction*/ ):void;
	parallelSetAll( arg0:[long], arg1:any /*java.util.function.IntToLongFunction*/ ):void;
	parallelSetAll<T>( arg0:[T], arg1:any /*java.util.function.IntFunction*/ ):void;
	parallelSort( arg0:[long], arg1:int, arg2:int ):void;
	parallelSort( arg0:[long] ):void;
	parallelSort( arg0:bytearray ):void;
	parallelSort( arg0:[int], arg1:int, arg2:int ):void;
	parallelSort( arg0:[any /*short*/], arg1:int, arg2:int ):void;
	parallelSort<T>( arg0:[T], arg1:any /*java.util.Comparator*/ ):void;
	parallelSort<T>( arg0:[T] ):void;
	parallelSort<T>( arg0:[T], arg1:int, arg2:int ):void;
	parallelSort( arg0:[float] ):void;
	parallelSort( arg0:chararray ):void;
	parallelSort( arg0:[int] ):void;
	parallelSort( arg0:bytearray, arg1:int, arg2:int ):void;
	parallelSort( arg0:[float], arg1:int, arg2:int ):void;
	parallelSort( arg0:[double] ):void;
	parallelSort( arg0:[any /*short*/] ):void;
	parallelSort<T>( arg0:[T], arg1:int, arg2:int, arg3:any /*java.util.Comparator*/ ):void;
	parallelSort( arg0:chararray, arg1:int, arg2:int ):void;
	parallelSort( arg0:[double], arg1:int, arg2:int ):void;
	setAll( arg0:[double], arg1:any /*java.util.function.IntToDoubleFunction*/ ):void;
	setAll<T>( arg0:[T], arg1:any /*java.util.function.IntFunction*/ ):void;
	setAll( arg0:[long], arg1:any /*java.util.function.IntToLongFunction*/ ):void;
	setAll( arg0:[int], arg1:any /*java.util.function.IntUnaryOperator*/ ):void;
	sort( arg0:bytearray, arg1:int, arg2:int ):void;
	sort( arg0:[long] ):void;
	sort<T>( arg0:[T], arg1:int, arg2:int, arg3:any /*java.util.Comparator*/ ):void;
	sort( arg0:[any /*java.lang.Object*/] ):void;
	sort( arg0:[long], arg1:int, arg2:int ):void;
	sort( arg0:[float] ):void;
	sort( arg0:[int] ):void;
	sort( arg0:[int], arg1:int, arg2:int ):void;
	sort( arg0:[any /*java.lang.Object*/], arg1:int, arg2:int ):void;
	sort( arg0:bytearray ):void;
	sort( arg0:[float], arg1:int, arg2:int ):void;
	sort( arg0:chararray ):void;
	sort( arg0:chararray, arg1:int, arg2:int ):void;
	sort<T>( arg0:[T], arg1:any /*java.util.Comparator*/ ):void;
	sort( arg0:[any /*short*/], arg1:int, arg2:int ):void;
	sort( arg0:[double], arg1:int, arg2:int ):void;
	sort( arg0:[any /*short*/] ):void;
	sort( arg0:[double] ):void;
	spliterator( arg0:[long], arg1:int, arg2:int ):any /*java.util.Spliterator$OfLong*/;
	spliterator( arg0:[long] ):any /*java.util.Spliterator$OfLong*/;
	spliterator( arg0:[int], arg1:int, arg2:int ):any /*java.util.Spliterator$OfInt*/;
	spliterator( arg0:[double] ):any /*java.util.Spliterator$OfDouble*/;
	spliterator( arg0:[double], arg1:int, arg2:int ):any /*java.util.Spliterator$OfDouble*/;
	spliterator<T>( arg0:[T] ):any /*java.util.Spliterator*/;
	spliterator<T>( arg0:[T], arg1:int, arg2:int ):any /*java.util.Spliterator*/;
	spliterator( arg0:[int] ):any /*java.util.Spliterator$OfInt*/;
	stream( arg0:[int] ):any /*java.util.stream.IntStream*/;
	stream<T>( arg0:[T], arg1:int, arg2:int ):java.util.stream.Stream<T>;
	stream<T>( arg0:[T] ):java.util.stream.Stream<T>;
	stream( arg0:[double] ):any /*java.util.stream.DoubleStream*/;
	stream( arg0:[int], arg1:int, arg2:int ):any /*java.util.stream.IntStream*/;
	stream( arg0:[long] ):any /*java.util.stream.LongStream*/;
	stream( arg0:[long], arg1:int, arg2:int ):any /*java.util.stream.LongStream*/;
	stream( arg0:[double], arg1:int, arg2:int ):any /*java.util.stream.DoubleStream*/;
	toString( arg0:[boolean] ):string;
	toString( arg0:bytearray ):string;
	toString( arg0:[float] ):string;
	toString( arg0:[double] ):string;
	toString( arg0:[long] ):string;
	toString( arg0:[int] ):string;
	toString( arg0:[any /*short*/] ):string;
	toString( arg0:chararray ):string;
	toString( arg0:[any /*java.lang.Object*/] ):string;
}

export const Arrays: ArraysStatic = Java.type("java.util.Arrays");


interface CollectionsStatic {

	readonly class:any;
	addAll<T>( arg0:java.util.Collection<T>, ...arg1:T[] ):boolean;
	asLifoQueue( arg0:any /*java.util.Deque*/ ):any /*java.util.Queue*/;
	binarySearch<T>( arg0:java.util.List<T>, arg1:T, arg2:any /*java.util.Comparator*/ ):int;
	binarySearch<T>( arg0:java.util.List<java.lang.Comparable<T>>, arg1:T ):int;
	checkedCollection<E>( arg0:java.util.Collection<E>, arg1:java.lang.Class<E> ):java.util.Collection<E>;
	checkedList<E>( arg0:java.util.List<E>, arg1:java.lang.Class<E> ):java.util.List<E>;
	checkedMap<K,V>( arg0:java.util.Map<K, V>, arg1:java.lang.Class<K>, arg2:java.lang.Class<V> ):java.util.Map<K, V>;
	checkedNavigableMap<K,V>( arg0:any /*java.util.NavigableMap*/, arg1:java.lang.Class<K>, arg2:java.lang.Class<V> ):any /*java.util.NavigableMap*/;
	checkedNavigableSet<E>( arg0:any /*java.util.NavigableSet*/, arg1:java.lang.Class<E> ):any /*java.util.NavigableSet*/;
	checkedQueue<E>( arg0:any /*java.util.Queue*/, arg1:java.lang.Class<E> ):any /*java.util.Queue*/;
	checkedSet<E>( arg0:java.util.Set<E>, arg1:java.lang.Class<E> ):java.util.Set<E>;
	checkedSortedMap<K,V>( arg0:any /*java.util.SortedMap*/, arg1:java.lang.Class<K>, arg2:java.lang.Class<V> ):any /*java.util.SortedMap*/;
	checkedSortedSet<E>( arg0:any /*java.util.SortedSet*/, arg1:java.lang.Class<E> ):any /*java.util.SortedSet*/;
	copy<T>( arg0:java.util.List<T>, arg1:java.util.List<T> ):void;
	disjoint( arg0:java.util.Collection<any /*java.lang.Object*/>, arg1:java.util.Collection<any /*java.lang.Object*/> ):boolean;
	emptyEnumeration(  ):any /*java.util.Enumeration*/;
	emptyIterator<T>(  ):java.util.Iterator<T>;
	emptyList<T>(  ):java.util.List<T>;
	emptyListIterator(  ):any /*java.util.ListIterator*/;
	emptyMap<K,V>(  ):java.util.Map<K, V>;
	emptyNavigableMap(  ):any /*java.util.NavigableMap*/;
	emptyNavigableSet(  ):any /*java.util.NavigableSet*/;
	emptySet<T>(  ):java.util.Set<T>;
	emptySortedMap(  ):any /*java.util.SortedMap*/;
	emptySortedSet(  ):any /*java.util.SortedSet*/;
	enumeration<T>( arg0:java.util.Collection<T> ):any /*java.util.Enumeration*/;
	fill<T>( arg0:java.util.List<T>, arg1:T ):void;
	frequency( arg0:java.util.Collection<any /*java.lang.Object*/>, arg1:any /*java.lang.Object*/ ):int;
	indexOfSubList( arg0:java.util.List<any /*java.lang.Object*/>, arg1:java.util.List<any /*java.lang.Object*/> ):int;
	lastIndexOfSubList( arg0:java.util.List<any /*java.lang.Object*/>, arg1:java.util.List<any /*java.lang.Object*/> ):int;
	list( arg0:any /*java.util.Enumeration*/ ):any /*java.util.ArrayList*/;
	max<T>( arg0:java.util.Collection<T>, arg1:any /*java.util.Comparator*/ ):T;
	max<T>( arg0:java.util.Collection<T> ):T;
	min<T>( arg0:java.util.Collection<T>, arg1:any /*java.util.Comparator*/ ):T;
	min<T>( arg0:java.util.Collection<T> ):T;
	nCopies<T>( arg0:int, arg1:T ):java.util.List<T>;
	newSetFromMap<E>( arg0:java.util.Map<E, boolean|null> ):java.util.Set<E>;
	replaceAll<T>( arg0:java.util.List<T>, arg1:T, arg2:T ):boolean;
	reverse( arg0:java.util.List<any /*java.lang.Object*/> ):void;
	reverseOrder(  ):any /*java.util.Comparator*/;
	reverseOrder( arg0:any /*java.util.Comparator*/ ):any /*java.util.Comparator*/;
	rotate( arg0:java.util.List<any /*java.lang.Object*/>, arg1:int ):void;
	shuffle( arg0:java.util.List<any /*java.lang.Object*/> ):void;
	shuffle( arg0:java.util.List<any /*java.lang.Object*/>, arg1:any /*java.util.Random*/ ):void;
	singleton<T>( arg0:T ):java.util.Set<T>;
	singletonList<T>( arg0:T ):java.util.List<T>;
	singletonMap<K,V>( arg0:K, arg1:V ):java.util.Map<K, V>;
	sort<T>( arg0:java.util.List<T>, arg1:any /*java.util.Comparator*/ ):void;
	sort<T>( arg0:java.util.List<T> ):void;
	swap( arg0:java.util.List<any /*java.lang.Object*/>, arg1:int, arg2:int ):void;
	synchronizedCollection<T>( arg0:java.util.Collection<T> ):java.util.Collection<T>;
	synchronizedList<T>( arg0:java.util.List<T> ):java.util.List<T>;
	synchronizedMap<K,V>( arg0:java.util.Map<K, V> ):java.util.Map<K, V>;
	synchronizedNavigableMap( arg0:any /*java.util.NavigableMap*/ ):any /*java.util.NavigableMap*/;
	synchronizedNavigableSet( arg0:any /*java.util.NavigableSet*/ ):any /*java.util.NavigableSet*/;
	synchronizedSet<T>( arg0:java.util.Set<T> ):java.util.Set<T>;
	synchronizedSortedMap( arg0:any /*java.util.SortedMap*/ ):any /*java.util.SortedMap*/;
	synchronizedSortedSet( arg0:any /*java.util.SortedSet*/ ):any /*java.util.SortedSet*/;
	unmodifiableCollection<T>( arg0:java.util.Collection<T> ):java.util.Collection<T>;
	unmodifiableList<T>( arg0:java.util.List<T> ):java.util.List<T>;
	unmodifiableMap<K,V>( arg0:java.util.Map<K, V> ):java.util.Map<K, V>;
	unmodifiableNavigableMap( arg0:any /*java.util.NavigableMap*/ ):any /*java.util.NavigableMap*/;
	unmodifiableNavigableSet( arg0:any /*java.util.NavigableSet*/ ):any /*java.util.NavigableSet*/;
	unmodifiableSet<T>( arg0:java.util.Set<T> ):java.util.Set<T>;
	unmodifiableSortedMap( arg0:any /*java.util.SortedMap*/ ):any /*java.util.SortedMap*/;
	unmodifiableSortedSet( arg0:any /*java.util.SortedSet*/ ):any /*java.util.SortedSet*/;
}

export const Collections: CollectionsStatic = Java.type("java.util.Collections");


