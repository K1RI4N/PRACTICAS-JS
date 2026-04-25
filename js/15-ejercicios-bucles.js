
/*
1. crea un bucle que imprima numeros del 1 al 20 *

2. crea un bucle que sume todos los numeros del 1 al 100 y muestre los resultados *

3. crea un bucle que imprima todos los numeros pares entre 1 y 50 *

4. dado un array de nombres, usa un bucle para imprimir cada nombre de la lista *

5. escribe un bucle que cuente el numero de vocales en una cadena de texto *

6. dado un array de numeros, usa un bucle para multiplicar todos los numeros y mostrar el producto *

7. escribe un bucle que imprima la tabla del 5 *

8. usa un bucle para generar los primeros 10 numeros de una secuencia de fibonacci *

9. usa un bucle para invertir una cadena de texto *

10. dado un array de numeros, usa un bucle para crear un nuevo array que contenga solo los numeros mayores a 10 *
*/

console.log ("EJERCICIO DE LOS NUMEROS DEL 1 AL 20")
for (let i=1;i<=20;i++){
    console.log(i)
}

console.log ("EJERCICIO DE LA SUMA DE LOS NUMEROS DEL 1 AL 100")

let a=1,sum=0
while(a<=100){
    sum=sum+a
    a++;
}console.log(sum)

console.log("OTRA FORMA DE HACER EL EJERCICIO DE LA SUMA DE LOS NUMEROS DEL 1 AL 100")
let acu=0
for(let h=1;h<=100;h++){
    acu=acu+h
}
console.log(acu)
acu=0

console.log("EJERCICIO DE SUMA DE NUMEROS DEL 1 AL 100 MOSTRANDO EL ACUMULADOR EN CADA ITERACION")

for(let h=1;h<=100;h++){
    acu=acu+h
    console.log(acu)
}

console.log("EJERCICIO DE LOS NUMEROS PARES ENTRE 1 Y 50")

for(let i=1;i<=50;i++){
    if(i%2==0){
        console.log(i)
    }
}

console.log("EJERCICIO DE LOS NOMBRES DE UN ARRAY")

let nombres= new Array ()

nombres=["zamba","pampa","vera","puna","runa","gala","india"]

for(let v of nombres){
    console.log(v)
}

console.log("EJERCICIO DE CONTAR LAS VOCALES DE UNA CADENA DE TEXTO")
// 1. Definimos la cadena de texto
let frase = "pampa y zamba";
let cantidadVocales = 0;

// 2. Usamos un bucle for como los que ya sabes hacer
// frase.length nos dice cuántas letras tiene el texto
for (let i = 0; i < frase.length; i++) {
    
    // Accedemos a la letra en la posición 'i'
    let letra = frase[i].toLowerCase(); // .toLowerCase() lo usamos para combertir mayusculas a minusculas

    // 3. Comprobamos si esa letra es una vocal
    if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
        cantidadVocales = cantidadVocales + 1; // Incrementamos el acumulador
    }
}

// 4. Mostramos el resultado final
console.log("El texto tiene este número de vocales:");
console.log(cantidadVocales);

console.log("EJERCICIO DE PRODUCTO DE NUMEROS")

let numeros = new Array()

numeros=[1,2,3,4,5,6,7,8,9,10]
let prod=1
let i=0

for(i=0;i<numeros.length;i++){
    prod=prod*numeros[i]
}
console.log(prod)

console.log("EJERCICIO DE LA TABLA DEL 5")

let t=5
let res=0
for(let i=0;i<=10;i++){
    res=t*i
}

console.log("EJERCICIO DE FIBONACCI")

let fibo= new Array()
fibo=[0,1]

for(let i=2;i<10;i++){
    fibo[i]=fibo[i-1]+fibo[i-2]
    console.log(fibo[i])
}

console.log("EJERCICIO DE INVERTIR UNA CADENA DE TEXTO")

let cadena="hola mundo"
let cadenaInvertida=""
for(let i=cadena.length-1;i>=0;i--){
    cadenaInvertida=cadenaInvertida+cadena[i]// concatenamos cada letra a la variable cadenaInvertida
}
console.log(cadenaInvertida)

console.log("EJERCICIO DE FILTRAR NUMEROS MAYORES A 10")

let numeros2=[5,12,8,20,3,15]
let numerosMayoresA10= new Array()
for(let i=0;i<numeros2.length;i++){
    if(numeros2[i]>10){
        numerosMayoresA10.push(numeros2[i]) // con push agregamos el numero al nuevo array
    }
}
for(let i=0;i<numerosMayoresA10.length;i++){
    console.log(numerosMayoresA10[i])
}