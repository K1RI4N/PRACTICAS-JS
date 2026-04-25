let myname ="ian"
console.log("myname:",myname)

let greeting ="hello"
console.log("greeting:",greeting)
// concatenacion de cadenas de texto
let fullgreeting =greeting + " " + myname + "!" // concatenacion de cadenas de texto
console.log("fullgreeting:",fullgreeting)

//longitud de una cadena de texto
console.log (greeting.length) // length es una propiedad de los strings que devuelve la longitud de la cadena de texto

// acceso a caracteres 
console.log(greeting[0]) // acceso al primer caracter de la cadena de texto
console.log(greeting[1]) // acceso al segundo caracter de la cadena de texto
console.log(greeting[greeting.length -1]) // acceso al ultimo caracter de la cadena de texto
// los indices empiezan en 0

//modulos compunes

console.log(greeting.toUpperCase()) // convierte la cadena de texto a mayusculas
console.log(greeting.toLowerCase()) // convierte la cadena de texto a minusculas
console.log(greeting.indexOf("e")) // devuelve el indice de la primera ocurrencia del caracter "e" en la 
// cadena de texto
console.log(greeting.indexOf("hola")) // devuelve -1 si el caracter no se encuentra en la cadena de texto
console.log(greeting.indexOf("hello")) // devuelve el indice de la primera ocurrencia de la subcadena "hello" en la cadena de texto
console.log(greeting.includes("e")) // devuelve true si el caracter "e" se encuentra en la cadena de texto
console.log(greeting.slice(0,3)) // devuelve una subcadena de la cadena de texto desde el indice 0 hasta el indice 3 (sin incluir el indice 3)
console.log(greeting.replace("hello","hi")) // reemplaza la subcadena "hello" por "hi" en la cadena de texto
console.log(greeting.repeat(3)) // repite la cadena de texto 3 veces

// plantillas literales

let message=`Mi nombre es ian`// con las comillas invertidas se pueden crear plantillas literales 
// las plantillas literales permiten insertar variables y expresiones dentro de una cadena de texto

console.log("message:",message)

console.log("Hola," + myname + "!") // concatenacion de cadenas de texto
console.log(`Hola, ${myname}!`) // plantilla literal con variable insertada ${} sirve para insertar variables y expresiones dentro de la cadena de texto

let edad=19

console.log(`Hola, mi nombre es ${myname} y tengo ${edad} años.`) // plantilla literal con variables insertadas

// ${} se utiliza para insertar variables y expresiones dentro de la cadena de texto 
// si la opcion que esta entre las llaves es una expresion se evalua y se inserta el resultado en la cadena de texto
// y para poder usarlo la cadena de texto debe estar entre comillas invertidas ``