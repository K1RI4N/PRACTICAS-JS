/* 
1. crea un array que almacene cinco animales *

2. añade dos mas. uno al principio y otro al final*

3. elimina el que se encuentra en la tercera posicion*

4. crea un set que almacene cinco libros*

5. añade dos mas. uno de ellos repetidos*

6. elimina uno concreto a tu eleccion*

7. crea un map que asocie el numero del mes a su nombre*

8. comprueba si el mes numero 5 existe en el map e imprime su valor*

9. añade al mapa una clave con un array que almacene los meses de verano *

10. crea un array. cambialo a un set y almacenalo en un map
*/

let myarray= ["perro", "gato", "pez", "loro", "hamster"]

console.log(myarray)
myarray.unshift("caballo")// añade al principio
myarray.push("leon")//añade al final

console.log(myarray)

myarray.splice(2,1)// elimina el que esta en la tercera posicion
// splice (posicion, cantidad de elementos a eliminar) el 2 seria la posicion 3 porque empieza a contar desde 0 y no tiene en cuenta los elementos que agregue con push o unshift
console.log(myarray)

let myset= new Set (["necronomicon","memento mori","la tia cosima","bibilia","don quijote","el principito"])

console.log(myset)

let myarraylibros= Array.from (myset)// convierto el set en array para poder usar push

myarraylibros.push("el hobbit")// puedo añadir dos libros a la vez
myarraylibros.push("don quijote")

console.log(myarraylibros)

let myset1= new Set (myarraylibros)// vuelvo a convertir el array en set para eliminar el repetido

console.log(myset1)

myset1.delete("necronomicon")// elimino un libro concreto

console.log(myset1)

let mymap = new Map([["1","enero"],["2","febrero"],["3","marzo"],["4","abril"],["5","mayo"],["6","junio"],["7","julio"],["8","agosto"],["9","septiembre"],["10","octubre"],["11","noviembre"],["12","diciembre"]])// creo un map que asocia el numero del mes con su nombre

console.log(mymap)

console.log(mymap.has("5"))// compruebo si el mes 5 existe en el map
console.log(mymap.get("5"))// imprimo su valor

mymap.set("verano",["junio","julio","agosto"])// añado al mapa una clave con un array que almacene los meses de verano

console.log(mymap)

let myarray2 = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"]

console.log(myarray2)

let myset2= new Set (myarray2)// convierto el array en set

console.log(myset2)

let mymap2= new Map ()// creo un map

mymap2.set("dias de la semana",myset2)// almaceno el set en un map

console.log(mymap2)