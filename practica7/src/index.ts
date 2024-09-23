function sum(a:number,b:number):number{
    return a + b;
}

let resultado = sum(2,3);
console.log(resultado); // 5

const fSum = sum(5,80);

// fsSum = sum(5,4); //Error

console.log(fSum); // 85

// Funciones de orden superior

// Funciones arrow

const sumArrow = (a:number,b:number):number => {
    return a + b;
    
}

// Funcion anonima

let funcionAnonima = function() {
    console.log("Hola mundo");
}
funcionAnonima();

// Funcion anonima arrow

let funcionAnonimaArrow = () =>{
    console.log("Hola mundo desde una funcion anonima arrow");
}
funcionAnonimaArrow();

//console.log(operation(a:number,b:number):number => {a * b});
// No es posible hacerlo de esta manera 

const variable = (a:number,b:number):number => a * b;

function saludo(nombre:string):string{
    return `Hola ${nombre}`;
}
console.log(saludo("Juan"));

// Funcion arrow que ni sea anonima
const saludoArrow = (nombre:string):string => "Hola " + nombre;
saludoArrow("Greys");

function advertencia() {
    console.log("Cuidado");
}
advertencia();
// void no retorna nada

// never no retorna nada y no tiene fin

function error(mensaje:string):never{
    
    let mensajeError: any = document.getElementById("mensajeError");

    mensajeError.innerHTML = "Error en la aplicacion";

    throw new Error(mensaje);
}

//error("Error en la aplicacion");

type accion = "sumar" | "restar" | "multiplicar" | "dividir";

const operacion = (a: number, b: number, operacion: accion) => operacion === 'sumar' ? a + b : operacion === 'restar' ? a - b : operacion === 'multiplicar' ? a * b : a / b; 

console.log(operacion(5, 16, 'sumar')); 
console.log(operacion(50, 10, 'restar')); 
console.log(operacion(5, 3, 'multiplicar')); 
console.log(operacion(20, 4, 'dividir'));






