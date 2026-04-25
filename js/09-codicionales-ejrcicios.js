/*
1) imprime por consola tu nombre si una variable toma su valor

2) imprime por consola un mensaje si el usario y consrtaseña son correctos

3) verifica si un numero es positivo, negativo o cero e imprime un mensaje por consola

4) usa el operador ternario para asignar el valor "adulto" o "menor" a una variable segun la edad ingresada

5) verifica si una presona puede votar (edad mayor o igual a 18) e imprime un mensaje por consola

6) muestra en que estacion del año nos encontramos segun el mes ingresado (usa switch)

7) muestra el numero de dias que tiene un mes ingresado 

8) usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma seleccionado (por ejemplo: "es" para español, "en" para ingles, "fr" para frances)

9) usa switch para hacer de nuevo el ejercicio 6

10) usa el switch para hacer el ejercicio 7
*/

let nombre="ian"

if(nombre==="ian"){// los 3 = son para comparar valor y tipo de dato osea si es exactamente igual
    console.log(nombre)
}

let ususario="pepito"
let contraseña="123"

console.log("ingrese su usuario y contraseña")
if(ususario==="pepito" && contraseña==="1234"){
    console.log("usuario y contraseña correctos")
}else{
    console.log("la contraseña pertenece al usuario pepito intente nuevamente con una distinta")
}


let numero=-5

switch (numero){
    case numero > 0:
        console.log("el numero es positivo")
        break;
    case numero < 0:
        console.log("el numero es negativo")
        break;
    case numero === 0:
        console.log("el numero es cero")
        break;
    default:
        console.log("no es un numero valido")
}
// el operador ternario es una forma corta de hacer un if else usa la palabra ? para el if y : para el else

let edad=20

edad >= 18 ? console.log("adulto") : console.log("menor")

if(edad>= 18 ){
    console.log("puede votar")
}else{
    console.log("no puede votar")
}

let mes=4

switch(mes){
    case 1:
        console.log("verano")
        console.log("el mes tiene 31 dias")
        break;
    case 2:
        console.log("verano")
        console.log("el mes tiene 28 dias")
        break;
    case 3:
        console.log("otoño")
        console.log("el mes tiene 31 dias")
        break
    case 4:
        console.log("otoño")
        console.log("el mes tiene 30 dias")
        break;
    case 5:
        console.log("otoño")
        console.log("el mes tiene 31 dias")
        break;
    case 6:
        console.log("invierno")
        console.log("el mes tiene 30 dias")
        break;
    case 7: 
        console.log("invierno")
        console.log("el mes tiene 31 dias")
        break;  
    case 8:
        console.log("invierno")
        console.log("el mes tiene 31 dias")
        break;
    case 9:
        console.log("primavera")
        console.log("el mes tiene 30 dias")
        break;
    case 10:
        console.log("primavera")
        console.log("el mes tiene 31 dias")
        break;
    case 11:
        console.log("primavera")
        console.log("el mes tiene 30 dias")
        break;  
    case 12:
        console.log("verano")
        console.log("el mes tiene 31 dias")
        break;
    default:
        console.log("mes no valido")
        break;
}

let idioma="es"

switch(idioma){
    case "es":
        console.log("hola")
        break;
    case "en":
        console.log("hello")
        break;
    case "fr":
        console.log("bonjour")
        break;
    default:
        console.log("idioma no soportado")
        break;
}

