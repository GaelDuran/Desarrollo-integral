"use strict";
// Tuplas
let tupla = ['Lucas', 23];
console.log(tupla);
console.log(tupla[0]);
console.log(typeof tupla);
let outTuple = ['Lucas', 23, true];
console.log('Nombre', outTuple[0]);
console.log('Edad', outTuple[1]);
// Ternario
let casado = outTuple[2] ? 'casado' : 'soltero';
console.log('Estado civil', casado);
let outTuple2 = [23, false, 'Lucas'];
outTuple2 = [23, true, 'Lucas'];
console.log(outTuple2);
let ourReadonlyTuple = [5, true, 'Diego'];
//ourReadonlyTuple.push('Cadena');
//ourReadonlyTuple[0] = 30;
console.log('Nombre', ourReadonlyTuple[2]);
const graph = [55.2, 41.3];
console.log(graph);
console.log(graph[0]);
//Desestructuración de variables
const person = {
    firstname: "Juan",
    lastname: "Perez",
    age: 18
};
//let nombreX:string = person.firstname;
let { firstname, lastname, age } = person;
console.log(firstname, lastname, age);
// Usando TS Y desestructuracion de variables hay que generar una serie de fibonacci con hasta 100 veces
