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
