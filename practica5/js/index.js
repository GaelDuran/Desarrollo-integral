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
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
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
}
let personaje1 = new Persona('Alberto', 30);
console.log(personaje1.edad);
console.log(personaje1.nombre);
//personaje1.edad = 'Hola';
personaje1.edad = 25;
console.log(personaje1.edad);
let personaje2 = new Persona('Carlos', 19);
personaje2.setEdad(20);
console.log('Nombre:' + personaje2.getNombre());
console.log('Edad:' + personaje2.getEdad());
