//Ejercicio 1
function esPar(numero) {
    return numero % 2 == 0;
}

console.log("El numero 8 es par: " + esPar(8));
console.log("El numero 7 es par: " + esPar(7));


//Ejercicio 2
function convertirCelsiusAFahrenheit(celsius) {
    let fahrenheit = celsius * 1.8 + 32;
    console.log(celsius + "°C son equivalentes a " + fahrenheit + "°F");
}

convertirCelsiusAFahrenheit(30);