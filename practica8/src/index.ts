console.log("Hola codespace")

const nuevoHeroe:string = 'Spider-Man';

function returnName():string{
    return nuevoHeroe;
}

const heroeNombre = returnName();
let otraVariable = returnName();
console.log('De que tipo es:', typeof otraVariable);

//Parametros obligatorios en funciones, SWIFT
const nombreCompleto = (nombre:string, apellido:string) => {
    return `${nombre} ${apellido}`;
}

const tuNombre = nombreCompleto('Gael', 'Durán');
console.log(tuNombre);

//Parametros opcionales en funciones
const nombreCompleto2 = (nombre:string, apellido?:string) => {
    return `${nombre || 'no se proporciono nombre'} ${apellido || 'no se proporciono apellido'}`;
}

const tuNombre2 = nombreCompleto2("Gael2");
console.log(tuNombre2);

const nombreCompleto3 = (nombre:string, apellido?:string, mayusculas:boolean = false) => {

    return mayusculas ? `${nombre || 'no se proporciono nombre'} ${apellido || 'no se proporciono apellido'}`.toUpperCase() : `${nombre || 'no se proporciono nombre'} ${apellido || 'no se proporciono apellido'}`;
}

const tuNombre3 = nombreCompleto3("Gael3", "Durán3", true);
console.log(tuNombre3);

// Operador REST

const nombreCompleto4 = (nombre:string, edad:number, ...restoApellidos:string[]) => {
    return `${nombre} ${restoApellidos.join(' ')} ${edad} años`;

}

const superman4 = nombreCompleto4('Clark',32,'Kent','Oswald','Smith','Otro','Uno mas');
console.log(superman4);



