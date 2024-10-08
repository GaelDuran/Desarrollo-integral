// Tuplas

let tupla:[string, number] = ['Lucas', 23];

console.log(tupla);
console.log(tupla[0]);
console.log(typeof tupla);

let outTuple: [string, number, boolean] = ['Lucas', 23, true];

console.log('Nombre', outTuple[0]);
console.log('Edad', outTuple[1]);

// Ternario

let casado:string = outTuple[2] ? 'casado' : 'soltero';
console.log('Estado civil', casado);

let outTuple2: [number, boolean, string] = [23, false, 'Lucas'];
outTuple2 = [23, true, 'Lucas'];
console.log(outTuple2);

let ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'Diego'];

//ourReadonlyTuple.push('Cadena');
//ourReadonlyTuple[0] = 30;
console.log('Nombre', ourReadonlyTuple[2]);

const graph: [x: number, y: number] = [55.2, 41.3];
console.log(graph);
console.log(graph[0]);

//Desestructuración de variables
const person = {
    firstname: "Juan",
    lastname: "Perez",
    age: 18
}

//let nombreX:string = person.firstname;
let {firstname, lastname, age} = person;
console.log(firstname, lastname, age);

// Usando TS Y desestructuracion de variables hay que generar una serie de fibonacci con hasta 100 veces
// Graficar los resultados en pantalla

function fibonacciSeries(n: number): number[] {
    const series: number[] = [0, 1];

    for(let i = 2; i < n; i++) {
        const nexNumber = series[i - 1] + series[i - 2];
        series.push(nexNumber);
    }

    return series;
}

const n: number = 25;
const fibonacci: number[] = fibonacciSeries(n);
console.log(fibonacci);

