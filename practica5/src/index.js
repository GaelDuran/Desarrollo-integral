"use strict";
let miVariable = 'Hola mundo';
console.log(miVariable);
const person1 = {
    firstName1: "Jonh",
    lastName1: "Doe",
    age: 50
};
let { firstName1, lastName1 } = person1;
console.log(firstName1, ' ', lastName1);
let miNombre = "Gael";
let [a1, a2, a3, a4, a5] = miNombre;
console.log(a1, a2, a3, a4, a5);
console.log(a3);
const frutas = ["platanos", "naranjas", "manzanas", "mangos"];
let [fruta1, fruta2] = frutas;
console.log(fruta1, fruta2);
let [frutaA, , , frutaB] = frutas;
console.log(frutaA, fruta2);
class Persona {
    constructor(nombre, apellidoPaterno, apellidoMaterno, edad) {
        this.nombre = nombre;
        this.edad = edad;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
    }
    getEdad() {
        return this.edad;
    }
    setEdad(edad) {
        this.edad = edad;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getApellidoPaterno() {
        return this.apellidoPaterno;
    }
    setApellidoPaterno(apellidoPaterno) {
        this.apellidoPaterno = apellidoPaterno;
    }
    getApellidoMaterno() {
        return this.apellidoMaterno;
    }
    setApellidoMaterno(apellidoMaterno) {
        this.apellidoMaterno = apellidoMaterno;
    }
    getNombreCompleto() {
        return this.nombre + ' ' + this.apellidoPaterno + ' ' + this.apellidoMaterno;
    }
}
let personaje1 = new Persona('Alberto', 'Perez', 'Lopez', 30);
console.log(personaje1.edad);
console.log(personaje1.nombre);
//personaje1.edad = 'Hola';
personaje1.edad = 25;
console.log(personaje1.edad);
let personaje2 = new Persona('Carlos', 'Alonso', 'Romero', 19);
personaje2.setEdad(20);
console.log('Nombre:' + personaje2.getNombre());
console.log('Edad:' + personaje2.getEdad());
console.log(personaje1.getNombreCompleto());
class UserAccount {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const usuarioInterface = new UserAccount('Imagine Dragons', 2);
console.log(usuarioInterface.name, usuarioInterface.id);
// Crear al menos 5 clases que van a usar en su proyecto final, 3 propiedades, getters y setters y al menos 1 metodo por clase o funcion, agregar un constructor
/*
class Productos {
}

class Usuario {
}

class Carrito {
}

class MetodoDePago {
}

*/
