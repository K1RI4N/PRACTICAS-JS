
/*
1. crea un bucle que imprima numeros del 1 al 20 *

2. crea un bucle que sume todos los numeros del 1 al 100 y muestre los resultados *

3. crea un bucle que imprima todos los numeros pares entre 1 y 50 *

4. dado un array de nombres, usa un bucle para imprimir cada nombre de la lista *

5. escribe un bucle que cuente el numero de vocales en una cadena de texto

6. dado un array de numeros, usa un bucle para multiplicar todos los numeros y mostrar el producto

7. escribe un bucle que imprima la tabla del 5

8. usa un bucle para generar los primeros 10 numeros de una secuencia de fibonacci

9. usa un bucle para invertir una cadena de texto

10. dado un array de numeros, usa un bucle para crear un nuevo array que contenga solo los numeros mayores a 10
*/


for (let i=1;i<=50;i++){
    console.log(i)
}
let a=1,sum=0
while(a<=100){
    sum=sum+a
    a++;
}console.log(sum)

let acu=0
for(let h=1;h<=100;h++){
    acu=acu+h
}
console.log(acu)
acu=0
for(let h=1;h<=100;h++){
    acu=acu+h
    console.log(acu)
}

for(let i=1;i<=50;i++){
    if(i%2==0){
        console.log(i)
    }
}

let nombres= new Array ()

nombres=["zamba","pampa","vera","puna","runa","gala","india"]

for(let v of nombres){
    console.log(v)
}
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