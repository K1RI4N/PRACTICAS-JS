// declaracion 

let myset = new Set()
let myset2 = {}// no es lo mismo que un set
// inicializacion

myset = new Set(["hola","chau","como tas","mi loco"])// para que se muestren bien los datos le tengo que poner []

console.log(myset)
console.log(myset2)

// and y delete

myset.add("bien y vos")// lo agrega al final
myset.add("hola")// no lo agrega porque ya existe
console.log(myset)

myset.delete("chau")// elimina el elemento no necesariamente al final no sigue un indice
console.log(myset)
console.log(myset.delete("chau"))// si no existe devuelve false
console.log(myset.delete("hola"))// si existe devuelve true

// has

console.log(myset.has("como tas"))// devuelve true si existe
console.log(myset.has("chau"))// devuelve false si no existe

// size

console.log(myset.size)// devuelve la cantidad de elementos

// converir un set a array

let myarray = Array.from(myset)
console.log(myarray)

// convertir un array a set

myset = new Set(myarray)
console.log(myset)

myset.add("como tas")// no permite duplicados principal diferencia con los arrays
console.log(myset)// no cambia nada
// si en el add la palabra o valor no es exactamente la misma la agrega