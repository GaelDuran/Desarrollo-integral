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
