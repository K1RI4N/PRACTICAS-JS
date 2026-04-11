// operadores

// Operadores Aritméticos

console.log(3 + 2) // suma
console.log(3 - 2) // resta
console.log(3 * 2) // multiplicación
console.log(3 / 2) // división
console.log(3 % 2) // módulo
console.log(3 ** 2) // exponente
let a=5
let b=10

console.log(a + b) // suma
a++ // incremento tambien se puede usar a+=1
b-- // decremento tambien se puede usar b-=1 
console.log(a++)// incremento
console.log(++a)// incremento
console.log(b--)// decremento
console.log(--b)// decremento

// Operadores de Asignación

let myVariable = 1 // asignación =
console.log(myVariable)
myVariable += 1 // asignación con suma += a myVariable se le suma 1
console.log(myVariable)
myVariable -= 1 // asignación con resta -= a myVariable se le resta 1
console.log(myVariable)
myVariable *= 2 // asignación con multiplicación *= a myVariable se le multiplica por 2
console.log(myVariable)
myVariable /= 2 // asignación con división /= a myVariable se le divide por 2
console.log(myVariable)
myVariable %= 2 // asignación con módulo %= a myVariable se le obtiene el resto de la división entre 2
console.log(myVariable)
myVariable **= 3 // asignación con exponente **= a myVariable se le eleva al cubo
console.log(myVariable)

// Operadores de Comparación
let c=5
let d=10
let f=10
console.log(c>d) // mayor que >
console.log(c<d) // menor que <
console.log(c>=d) // mayor o igual que >=
console.log(c<=d) // menor o igual que <=
console.log(f==d) // igual que == compara valores igualdad por valor
console.log(f=="10") // igual que == compara valores igualdad por valor aunque sean de distinto tipo    
console.log(f===d) // estrictamente igual que === compara valores y tipos de datos
console.log(f === "10") // estrictamente igual que === compara valores y tipos de datos
console.log(f === 10) // estrictamente igual que === compara valores y tipos de datos
console.log(f!=d) // diferente que != compara valores
console.log(f!==d) // estrictamente diferente que !== compara valores y tipos de datos
console.log(f!= 10) // diferente que != compara valores
console.log(f!== "10") // estrictamente diferente que !== compara valores y tipos de datos
console.log(f!== 10) // estrictamente diferente que !== compara valores y tipos de datos
// el 0 es false y el 1 es true
console.log(0==false) // true
console.log(0===false) // false
console.log(1==true) // true
console.log(1===true) // false
console.log(0== "") // true
console.log(0=== "") // false
console.log(0== " ") // true
console.log(0=== " ") // false
console.log(0== "hola") // false
console.log(0== '') // true
console.log(0=== '') // false
console.log(undefined== null) // true
console.log(undefined=== null) // false
// valores verdaderos 
// todos los numeros negativos y positivos excepto el 0
// todas las cadenas de texto excepto la cadena vacia ""
// todos los booleanos true
/*valores falsos
0
0n
null
undefined
NaN
boolean false
cadena vacia ""
*/

// operadores Lógicos

// AND (Y) &&
console.log(5<10 && 10>5) // true
console.log(5>10 && 10>5) // false
console.log(5<10 && 10<5) // false
console.log(5>10 && 10<5) // false
 
// OR (O) ||
console.log(5<10 || 10>5) // true
console.log(5>10 || 10>5) // true
console.log(5<10 || 10<5) // true
console.log(5>10 || 10<5) // false

console.log(5<10 && 10>5 || 5==5) // true
console.log(5<10 && 10>5 && 5==5) // true
console.log(5<10 || 10>5 && 5==5) // true

// NOT (NO) !
console.log(!(5<10)) // false
console.log(!(5>10)) // true
console.log(!(5==5)) // false
console.log(!(5!=5)) // true
console.log(!true) // false
console.log(!false) // true

// operadores ternarios

const isRaining = true // si esta lloviendo tiene que ser una variable constante porque su valor no cambia 
// condicion ? valor si es true : valor si es false

isRaining ? console.log("lleva paraguas") : console.log("no lleva paraguas")// si isRaining es true imprime lleva paraguas si es false imprime no lleva paraguas
// 1 si es true 0 si es false
const age = 18
age >= 18 ? console.log("es mayor de edad") : console.log("es menor de edad")
