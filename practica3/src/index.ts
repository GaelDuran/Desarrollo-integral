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

let personas:string[] = ['Carlos','Saul','Luis'];
console.log(personas);
console.log(personas[0]);
console.log(personas[3]);
console.log(personas[-1]);
personas.push('Jorge');
console.log(personas);

let numeros:number[] = [1,2,3,4,5];
let numeros2:Array<number> = [6,7,8,9,10];
//numeros2.push('Hola');
console.log(numeros,numeros2);

let numerosCadena:any = document.getElementById('numeros');
for(let i: number = 0; i < numeros.length; i++){
    numerosCadena.innerHTML += numeros[i];
    if (i< numeros.length -1) {
        numerosCadena.innerHTML += ' , ';
    }
}

let numeros2Cadena:any = document.getElementById('numeros2');
for(let i: number = 0; i < numeros2.length; i++){
    numeros2Cadena.innerHTML += numeros2[i];
    if (i< numeros2.length -1) {
        numeros2Cadena.innerHTML += ' , ';
    }
}

//Union de tipos

let miArray:(string | number)[] = ['Carlos', 24, 'Saul', 19, 'Luis', 25];
console.log(miArray);
let miArray2:Array<string | number> = ['Mate', 'Rayo Mcqueen', 'Hudson Hurnet'];
console.log(miArray2);
let miArray3:Array<any> = [true, 10, 'Hola', 20.5];
console.log(miArray3);
let miArray4: number[] = []; //Arreglo vacio
miArray4.push(3);
miArray4.push(2);
miArray4.push(1);
console.log(miArray4);

//Imprimir al reves mi arreglo 3,2,1

let miArray5: Array<any> = [];
miArray5.push('Carlos');
miArray5.push(45);
miArray5.push(true);
miArray5.push('<img src="data:image/jpeg;base64,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" alt="Imagen de Carlos Rivera">');
miArray5.push('Juan');
miArray5.push(25);
miArray5.push(true);
miArray5.push('<img src="https://ih1.redbubble.net/image.4984018484.7617/mp,504x498,matte,f8f8f8,t-pad,600x600,f8f8f8.u1.jpg" alt="Imagen de Juan"');

miArray5.forEach(item => {
    if (typeof item === 'string' && item.includes('<img')) {
        document.body.innerHTML += item + '<br>';
    } else {
        console.log(item);
    }
});


