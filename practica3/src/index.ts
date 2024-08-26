let normalx:any = 'hola';
normalx = 10;
normalx = true;
let usuario:any = 20;
console.log(normalx);

let nombre:string = 'Juan';
nombre = 'Juan Carlos';
//nombre = null;
console.log(nombre);

let value:any;
console.log(value);

value = true;
value = 10;
value = 'hola';
value = [];
value = {};
value = Math.random;
value = null;
value = undefined;
console.log(value);

let miValor:unknown;
console.log("Tipo unknown", miValor);

let value1:unknown = miValor;
let value2:any = miValor;
//let value3:boolean = miValor; // Error    
// let value4:number = miValor; // Error

const edad:number = 18;
console.log('Edad',edad);
console.log('Edad' + edad);

const sueldo:number = 1.234;
const total: number = Number('5678'); // Cast

console.log('Sueldo',sueldo);
console.log('Total',total);

const personaje:string = "El chavo";
const otroPersonaje:string = 'Don Ramon';
const otroMas:string = `Profesor Jirafales y ${personaje}`;
console.log(otroMas);

//const heroe:string = 'Deadpool's House';
const heroe:string ="DeadPool\'s House";
console.log(heroe);
console.log(heroe.toUpperCase());

let vengador:any;
vengador = 'Dr. Strange';
console.log(vengador.charAt(4));
vengador = 150.55
console.log(vengador.toFixed(1));
console.log((vengador as number).toFixed(1));
console.log((<number>vengador).toFixed(1));
