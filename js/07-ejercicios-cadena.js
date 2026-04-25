/*
1) concatenar dos cadenas de texto 

2) muestra la longitud de una cadena de texto

3) muestra el primer y utlimo caracter del string

4) convierte a mayusculas y minisculas un string

5) interpola el valor de una variable en un string

6) crea una cadena de texto en varias lineas 

7) reemplaza todos los espacios en blanco de un strin por guiones

8) comprueba si una cadena de texto contiene una palabra concreta 

9) comprueba si dos strings son iguales 

10) comprueba si dos strings tienen la misma longitud 
*/
let cadena1, cadena2

cadena1= "hola"
cadena2= "mundo"

console.log(cadena1+" "+cadena2)// concatenacion de cadenas de texto
console.log(cadena1.length)
console.log(cadena2.length)
console.log(cadena1[0])
console.log(cadena1[cadena1.length -1])

console.log(cadena1.toUpperCase())
console.log(cadena1.toLowerCase())

let nombre="ian", edad = 19

console.log("hola mi nombre es ${nombre} y tengo ${edad} años")// interpolacion de variables en una cadena de texto

let multilinea=`esta es una cadena en varias lineas`

console.log(multilinea)

let frase="hola como estas"
console.log(frase.replace(/ /g,"-"))// reemplaza todos los espacios en blanco por guiones

console.log(frase.includes("como"))// comprueba si la cadena contiene la palabra "como"

if(cadena1==cadena2){
    console.log("las cadenas son iguales")
}else{
    console.log("las cadenas son diferentes")
}

if(cadena1.length==cadena2.length){
    console.log("las cadenas tienen la misma longitud")
}else {
    if(cadena1.length<cadena2.length){
        console.log("cadena1 es mas corta que cadena2")
    }else{
        console.log("cadena1 es mas larga que cadena2")
    }
}
