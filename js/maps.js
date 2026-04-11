// map es como los punteros de C guardo dos tipos de datos una clave y un dato en un mismo lugar

// declaracion

let mymap= new Map();

console.log(mymap)

// inicializacion

mymap= new Map([["name","ian"],["age",19],["city","buenos aires"]]) //separo por comas los pares clave, valor

console.log(mymap) // muestro el map que cree

// metodos y propiedades 

// set actualizo un elemeto o lo agrego si es que la clave no existe

mymap.set("country","argentina") // agrega un par clave valor si la clave ya existe actualiza el valor
console.log(mymap)

// get sirve para preguntar por una clave y devolver el valor asociado a al misma

console.log(mymap.get("name")) // devuelve el valor asociado a la clave
console.log(mymap.get("age")) // devuelve el valor asociado a la clave
console.log(mymap.get("city")) // devuelve el valor asociado a la clave
console.log(mymap.get("country")) // devuelve el valor asociado a la clave
// si la clave no existe devuelve undefined

// has pregunta si la clave existe  

console.log(mymap.has("name")) // devuelve true si la clave existe
console.log(mymap.has("age")) // devuelve true si la clave existe
console.log(mymap.has("city")) // devuelve true si la clave existe
console.log(mymap.has("country")) // devuelve true si la clave existe
console.log(mymap.has("continent")) // devuelve false si la clave no existe

// delete elimina la clave y el valor 

mymap.delete("city") // elimina el par clave valor
console.log(mymap)
console.log(mymap.has("city")) // devuelve false si la clave no existe

// keys devuelve un vector con las claves

console.log(mymap.keys()) // devuelve un iterable con las claves del map

// values devuelve un vector de los valores 

console.log(mymap.values()) // devuelve un iterable con los valores del map

//size devuelve el tamaño del mymap

console.log(mymap.size) // devuelve la cantidad de pares clave valor en el map

//entries devuelve todo tanto las claves como los valores

console.log(mymap.entries()) // devuelve un iterable con los pares clave valor del map

// clear elimino todo lo que agrege en mymap

mymap.clear() // elimina todos los pares clave valor
console.log(mymap)


