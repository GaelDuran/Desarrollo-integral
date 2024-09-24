"use strict";
function sum(a, b) {
    return a + b;
}
let resultado = sum(2, 3);
console.log(resultado); // 5
const fSum = sum(5, 80);
// fsSum = sum(5,4); //Error
console.log(fSum); // 85
// Funciones de orden superior
// Funciones arrow
const sumArrow = (a, b) => {
    return a + b;
};
// Funcion anonima
let funcionAnonima = function () {
    console.log("Hola mundo");
};
funcionAnonima();
// Funcion anonima arrow
let funcionAnonimaArrow = () => {
    console.log("Hola mundo desde una funcion anonima arrow");
};
funcionAnonimaArrow();
//console.log(operation(a:number,b:number):number => {a * b});
// No es posible hacerlo de esta manera 
const variable = (a, b) => a * b;
function saludo(nombre) {
    return `Hola ${nombre}`;
}
console.log(saludo("Juan"));
// Funcion arrow que ni sea anonima
const saludoArrow = (nombre) => "Hola " + nombre;
saludoArrow("Greys");
function advertencia() {
    console.log("Cuidado");
}
advertencia();
// void no retorna nada
// never no retorna nada y no tiene fin
function error(mensaje) {
    let mensajeError = document.getElementById("mensajeError");
    mensajeError.innerHTML = "Error en la aplicacion";
    throw new Error(mensaje);
}
const operacion = (a, b, operacion) => operacion === 'sumar' ? a + b : operacion === 'restar' ? a - b : operacion === 'multiplicar' ? a * b : a / b;
console.log(operacion(5, 16, 'sumar'));
console.log(operacion(50, 10, 'restar'));
console.log(operacion(5, 3, 'multiplicar'));
console.log(operacion(20, 4, 'dividir'));
