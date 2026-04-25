/*
1 crea una variable para cada operacion aritmetica
2 crea una variable para cada tipo de operacion de asignacion, que haga uso
3 imprime 5 comparaciones verdaderas con diferentes operadores de comparacion
4 imprime 5 comparacinoes falsas con diferentes operadores de comparacion
5 utiliza el operador logico and
6 utiliza el operador logico or
7 combina ambos operadores logicos
8 añanade alguna negacion
9 utiliza el operador ternario
10 combina operadores aritmeticos, de comparacion y logicos*/

let a 
let b
let C

a=4
b=5
C=a+b
console.log("suma:",C)
C=a-b
console.log("resta:",C)
C=a*b
console.log("multiplicacion:",C)
C=a/b
console.log("division:",C)// / me da el resto
C=a%b
console.log("modulo:",C)
C=a**b
console.log("exponente:",C)
a+=2
console.log("asignacion suma:",a)
a-=2
console.log("asignacion resta:",a)
a*=2
console.log("asignacion multiplicacion:",a)
a/=2
console.log("asignacion division:",a)
a%=2
console.log("asignacion modulo:",a)

let x, y, z
x=10
y=5
z=0
if(x>y && z<x){
    console.log("true")
}else{
    console.log("false")
}if(x<y || y>z){
    console.log("true")
}
if(!x<y){// ! negacion niega lo que sigue 
    console.log("true ")
}
if(!x>y){
    console.log("false ")
}
const israinting = true 

if(israinting==1){
    console.log("se me inunda la casa")
}else{
    console.log("no se me inunda la casa")
}

// optra forma 
israinting ? console.log("se me inunda le rancho") : console.log("no se me inunda el rancho")

const edad=20
edad>=18 && israinting ? console.log("es mayor de edad y esta lloviendo") : console.log("es menor de edad o no esta lloviendo")
