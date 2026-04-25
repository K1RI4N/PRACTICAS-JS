/*
escribe una variable con valores asociados a todos los datos de tipo primitivo

imprime por consola el valor de todas las variables

imprime por consola el tipo de todas las variables

a continuacion modifica los valores de la variables por otros del mismo tipo 

a continuacion modifica los valores de las variables por otros de distintos tipos 

declara constantes con valores asociados a todos los tipos de datos primitivos 

a continuacion modigica los valores de las constantes 

comenta las lineas que produzcan algun tipo de error al ejecutarse
*/
// los tipos de datos primitivos en javaScript son: number, string, boolean, null, undefined, symbol, bigint
let numero =42
let cadena ="hola javaScript"
const pi =3.14
const boolean =true 
const nulo =null
const indefinido = undefined // undefined es una palabra reservada en javaScript para representar una variable que no ha sido asignada
const cad="hola"
const bigint=9007199254740991n // n al final para representar un numero grande
const simbolo=Symbol("simbolo") // simbolo es una palabra reservada en javaScript para representar un valor unico e inmutable
console.log(numero)
console.log(cadena)
console.log(pi)
numero = "cien"
cadena = 200
console.log(numero)
console.log(cadena)
console.log(pi)
console.log(boolean)
console.log(nulo)
console.log(indefinido)
console.log(bigint)
console.log(simbolo)
console.log(cad)
console.log(typeof numero)// typeof es una palabra reservada en javaScript para conocer el tipo de dato de una variable
console.log(typeof cadena)
console.log(typeof pi)
console.log(typeof boolean)
console.log(typeof nulo)
console.log(typeof indefinido)
console.log(typeof bigint)
console.log(typeof simbolo)
console.log(typeof cad)

// para cambiar los valores de las constantes se debe crear una nueva constante con otro nombre por lo tanto lo siguiente dara error
/*
pi=3.1416
boolean=false
indefinido="ahora tiene valor"
nulo="ahora tiene valor"
bigint=9007199254740992n
simbolo=Symbol("nuevo simbolo")
cad="error"

console.log(pi)
console.log(boolean)
console.log(indefinido)
console.log(nulo)
console.log(bigint)
console.log(simbolo)
console.log(cad)
*/
// las lineas anteriores dan error porque no se pueden cambiar los valores de las constantes

