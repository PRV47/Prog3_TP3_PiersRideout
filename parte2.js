//Operadores logicos y condicionales
//Ejercicio 1
let a = 8;
let b = 6;
let c = 10;

if (a < b && c < b) {
    console.log("El mayor de los 3 numeros es " + b);
} else if (a < c && b < c) {
        console.log("El mayor de los 3 numeros es " + c);
    } else {
        console.log("El mayor de los 3 numeros es " + a);
}

//Ejercicio 2
let numero = prompt("Ingresa un numero:");
if (numero % 2 == 0) {
    console.log("El numero es par");
} else {
    console.log("El numero es impar");
}
