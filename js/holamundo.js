console.log ("hola, mundo comillas dobles")
console.log('hola, mundo comillas simples')
console.log(`hola, mundo asentos invertidos`)
// comentario de una sola linea
/* comentario
de varias lineas */
// formas de imprimir numeros
console.log("5")
console.log(5)
// control + s para guardar
// maneras de operar valores 
console.log(5 + 3)
console.log(5 - 3)
console.log(5 * 3)
console.log(5 / 3)
console.log(5 % 3) // modulo o residuo
console.log(5 ** 3) // exponente
// concatenacion de textos
console.log("hola" + " " + "mundo")
// variables 
var nombre = "Juan"
console.log(nombre)
var edad = 30
console.log(edad)
// reasignacion de variables
nombre = "Pedro"
console.log(nombre)
edad = 25
console.log(edad)
// buenas practicas para nombrar variables
var nombreCompleto = "Maria Garcia"
var edadUsuario = 28
var direccionCasa = "Calle Falsa 123"
// no usar caracteres especiales ni espacios
// var nombre-completo = "Ana Lopez" // incorrecto
// var nombre completo = "Ana Lopez" // incorrecto
// no empezar con numeros
// var 1nombre = "Ana Lopez" // incorrecto
// var _nombre = "Ana Lopez" // correcto pero no recomendado    
// var $nombre = "Ana Lopez" // correcto pero no recomendado
// tipos de datos   
var esEstudiante = true // booleano
const PI = 3.1416
console.log(PI)
// PI = 3.14 // error, no se puede reasignar una constante
// tipos de datos dinamicos
var dato = "texto"
console.log(dato)
let dato2 = 10
console.log(dato2)
dato2 = "nuevo texto"
console.log(dato2)
// variables let, const, var
// var es global y se puede reasignar entoces no hay que usar var (son como los globales en C)
// let es local y se puede reasignar no se puede acceder a ella antes de declararla o desde otro bloque
// const es local y no se puede reasignar
// las variables no llevan mayusculas al principio ni tildes o caracteres especiales
// var Nombre = "Ana" // incorrecto
// var nombre = "Ana" // correcto
// tipo de datos primitivos
// cadenas de texto

var cadena = "esto es una cadena" // string
let cadena2 = 'otra cadena' // string
let cadena3 = `cadena con acento invertido` // string
//bolleanos

var booleano1 = true // boolean verdadero
var booleano2 = false // boolean falso
// nulos

var nulo = null // null no tiene ningun valor 
// numeros

var numero = 100 // number
var altura =1.75 // number con decimales
// sin asiganr un valor

var indefinido // undefined todavia no le hemos asignado un valor
// sympbol

let mysymbol = Symbol("mi simbolo") // symbol unico e inmutable sirve para identificar propiedades de objetos 
// imprimiendo los tipos de datos

// numeros muy grandes

let mybygint = BigInt(9007199254740991019278346749283989) // bigint para numeros enteros muy grandes
let mybygint2 = 9007199254740991019278346749283989n // otra forma de declarar un bigint

// mostrando los valores en consola
console.log(cadena) 
console.log(cadena2)
console.log(cadena3)
console.log(numero)
console.log(booleano1)
console.log(booleano2)
console.log(nulo)
console.log(altura)
console.log(indefinido)
console.log(mysymbol)
console.log(mybygint)
console.log(mybygint2)
// mostrando los tipos de datos en consola solo puedo usarlo con variables no con valores directos
console.log(typeof(cadena))
console.log(typeof(cadena2))
console.log(typeof(cadena3))
console.log(typeof(numero))
console.log(typeof(booleano1))
console.log(typeof(booleano2))
console.log(typeof(nulo)) // object (esto es un error de javascript, null deberia ser null) console.log(typeof(altura))
// no puedo usar typeof(nulo) porque nulo es un valor y no una variable por eso no lo muestra
console.log(typeof(altura))
console.log(typeof(indefinido))
console.log(typeof(mysymbol))
console.log(typeof(mybygint))
console.log(typeof(mybygint2))
