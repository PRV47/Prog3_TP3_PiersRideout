//Ejercicio 1
let persona = {
    nombre: "Diego",
    edad: 30,
    ciudad: "Barcelona",
    cambiarCiudad: function(nuevaCiudad) {
        this.ciudad = nuevaCiudad;
    }
}

persona.cambiarCiudad("Madrid");
console.log ("Persona: " + persona.nombre + ", Edad: " + persona.edad + ", Ciudad: " + persona.ciudad);

//Ejercicio 2
let libro = {
    titulo: "El Quijote",
    autor: "Miguel de Cervantes",
    año: 1605,
    esAntiguo: function() {
        let edad = new Date().getFullYear() - this.año;
        return edad > 10;
    }
}

console.log ("El libro " + libro.titulo + " es antiguo: " + libro.esAntiguo());