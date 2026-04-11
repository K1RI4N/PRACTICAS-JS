// bucles o loops estructura de contral que sireve para repetir una accion

// for repite una accion una cantidad determinada de veces 

for(let i = 0; i<5; i++){ // exactamente igual que en C (puedo declarar el indice fuera del bucle)
    console.log(`hola ${i}`) // interpolacion (me dice el valor del indice)
    console.log ("hola")
}

const numbers = ["hola",2,"chau",3,4]

for(let i=0; i<numbers.length; i++){
    console.log(`elementos: ${numbers[i]}`) 
    //de esta forma puedo usar el tamaño del vector para el bucle y mostrar cada uno de los elememntos del mismo
}

//while repite una accion una cantidad de veces siempre que la condicion sea verdadera

let i=0
while(i<5){
    console.log(`hola ${i}`)
    i++
}

let l=6
do{
    console.log(`hola ${l}`)
    l++;
}while(l<5)

// for of recorrer valores de algo que sea iterable (tipo de dato o estructura de datos)

myarray=[1,2,3,4]
myset= new Set (["ian","moyano",20,true,"mmian.alejandro@gmail.com"])
mymap=new Map ([["nombre", "ian"],["email","mmian.alejandro@gmail.com "],["edad",20]])

for(let valor of myarray){
    console.log(valor)
}

for (let valor of myset){
    console.log(valor)
}

for(valor of mymap){
    console.log(valor)
}

// no hace falta que declare a valor pero si que lo ponga porque no sirve poner cualquier cosa donde va valor


/* buenas practicas: 
   break  le digo al ciclo que pare con lo que esta haciendo 
   continue le digo al ciclo que continue con lo que esta haciendo igorando una condicion que le haya puesto
*/

for(let i=0 ; i<10;i++){
    if(i==5){
        continue // si i=5 no muestra nada solo continua a la siguiente iteracion 
    }else if(i==6){
        break // si i=6 paro el bucle
    }
    console.log(`hola ${i}`)
}

