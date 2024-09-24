"use strict";
console.log("Hola codespace");
const nuevoHeroe = 'Spider-Man';
function returnName() {
    return nuevoHeroe;
}
const heroeNombre = returnName();
let otraVariable = returnName();
console.log('De que tipo es:', typeof otraVariable);
//Parametros obligatorios en funciones, SWIFT
const nombreCompleto = (nombre, apellido) => {
    return `${nombre} ${apellido}`;
};
const tuNombre = nombreCompleto('Gael', 'Durán');
console.log(tuNombre);
//Parametros opcionales en funciones
const nombreCompleto2 = (nombre, apellido) => {
    return `${nombre || 'no se proporciono nombre'} ${apellido || 'no se proporciono apellido'}`;
};
const tuNombre2 = nombreCompleto2("Gael2");
console.log(tuNombre2);
const nombreCompleto3 = (nombre, apellido, mayusculas = false) => {
    return mayusculas ? `${nombre || 'no se proporciono nombre'} ${apellido || 'no se proporciono apellido'}`.toUpperCase() : `${nombre || 'no se proporciono nombre'} ${apellido || 'no se proporciono apellido'}`;
};
const tuNombre3 = nombreCompleto3("Gael3", "Durán3", true);
console.log(tuNombre3);
// Operador REST
const nombreCompleto4 = (nombre, edad, ...restoApellidos) => {
    return `${nombre} ${restoApellidos.join(' ')} ${edad} años`;
};
const superman4 = nombreCompleto4('Clark', 32, 'Kent', 'Oswald', 'Smith', 'Otro', 'Uno mas');
console.log(superman4);
