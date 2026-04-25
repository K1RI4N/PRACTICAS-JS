
let op 
op=2
switch (2){
    case 1:
        console.log("opcion 1")
        break;
    case 2:
        console.log("opcion 1")
    default:
        console.log("opcion no valida")
        break;// no hace falta el ;
}

if(op==2){
    console.log("es igual a 2")
}

if(op !=2){
    console.log("es diferente de 2")
}else {
    console.log("es igual a 2")
}

op ==5? console.log("es 5"):console.log(`no es 5 es ${op}`)// no tendria que usar ${op} ya que no es una plantilla de texto

console.log(`el valor de op es ${op}`)

let edad=20
if(edad>=18){
    console.log("es mayor de edad")
}else if(edad<10){// se pueden usar varios else if para evaluar varias condiciones es un si no con condiciones
    console.log("es un niño")
}else{// se ejecuta si no se cumple ninguna de las  condiciones anteriores
    console.log("es menor de edad")
}

//OPERADOR TERNARIO es una forma corta de hacer un if else usa la palabra ? para el if y : para el else

edad >= 18 ? console.log("adulto") : console.log("menor")// se lo puedo asignar a una variable por ejemplo let resultado = edad >= 18 ? "adulto" : "menor" y luego console.log(resultado) para mostrar el resultado 
