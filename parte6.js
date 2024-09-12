//Ejercicio 1

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let dobles = [];

for (let i = 0; i < numeros.length; i++) {
    dobles.push(numeros[i] * 2);
}

console.log("Numero orioginales: ", numeros);
console.log("Numeros multiplicados por 2: ", dobles);


//Ejercicio 2

let pares = [];

for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        pares.push(i);
    }
    if (pares.length === 10) {
        break;
    }
}

console.log(pares);