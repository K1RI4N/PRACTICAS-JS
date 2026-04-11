// como declararlo 

let Myarray= [] // forma literal

let Myarray1= new Array() // forma con constructor

console.log(Myarray)

console.log(Myarray1)// no le pongo "" porque quiero que me muestre que es un array

// inicializar

Myarray=[3] // iniciar un array con 1 posicion vacia
Myarray1 = new Array (3)// iniciar un array con 3 posiciones vacias

console.log(Myarray)
console.log(Myarray1)

Myarray=[1,2,3,4]
Myarray1=new Array (1,2,3,4)

console.log(Myarray)
console.log(Myarray1)

Myarray=["hola", "como tas ", "mi loco ", 22 , false]
Myarray1= new Array ("hola", "como tas ", "mi loco ")

console.log(Myarray)
console.log(Myarray1)


Myarray=[3] // iniciar un array con 1 unica posicion con valor 3
Myarray1 = new Array (3)// iniciar un array con 3 posiciones vacias
Myarray1[0]="hola"// si saco algun elemento queda el espacio vacio
Myarray1[1]="chau"
Myarray1[2]="quiero "
Myarray1[3]="una"
Myarray1[4]=" rubia"

console.log(Myarray1)

Myarray[0]="hola"
Myarray[1]="chau"
Myarray[2]="quiero "
Myarray[3]="una"
Myarray[4]=" rubia"

console.log(Myarray)

// el tamaño se va ajustando automaticamente

// metodos comunes 

 Myarray = []

// push y pop
// push agrega un elemento al final del array
Myarray.push("hola")
Myarray.push("chau")
Myarray.push("como tas")
Myarray.push("mi loco")

console.log(Myarray)

console.log(Myarray.pop())// devuelve el ultimo elemento
Myarray.pop()// elimina el ultimo elemento 
console.log(Myarray)

//shift y unshift

Myarray.shift()// elimina el primer elemento
console.log(Myarray.shift())// elimina y devuelve el primer elemento
console.log(Myarray)

Myarray.unshift("hola","chau")// agrega elementos al inicio del array
console.log(Myarray)

// length

console.log(Myarray.length)// muestra el tamañano del array

//clear 
Myarray = [] // vacia el array
console.log(Myarray)// mejor esta
// o
Myarray.length=0
console.log(Myarray)

//slice
Myarray.push("hola")
Myarray.push("chau")
Myarray.push("como tas")
Myarray.push("mi loco")

let nuevoArray= Myarray.slice(1,3)// crea un nuevo array desde la posicion 1 hasta la 3 sin incluirla
console.log(nuevoArray)
console.log(Myarray)// el array original no se modifica

// splice
Myarray.splice(1,2)// elimina 2 elementos desde la posicion 1 hasta la posicion 2
console.log(Myarray)

Myarray.push("hola")
Myarray.push("chau")
Myarray.push("como tas")
Myarray.push("mi loco")

Myarray.splice(1,2,3)// elimina 2 elementos desde la posicion 1 hasta la posicion 2 y agrega el 3 en esa posicion
console.log(Myarray)
// el 3 lo puedo remplazar por cualquier otro valor o varios valores

