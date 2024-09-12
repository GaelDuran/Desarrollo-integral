// Enums

enum Color {
    Rojo,
    Verde,
    Azul
}

console.log(Color.Verde); 
//Color.Rojo = 100;
console.log(Color.Rojo);
let color1 = Color.Rojo;
color1 = Color.Verde;
//color1 = 20;
console.log('color1', color1);

enum CardinalDirections {
    Norte = "Norte",
    Sur = "Sur",
    Este = "Este",
    Oeste = "Oeste"
}

let direction: CardinalDirections = CardinalDirections.Norte;
console.log('direction', direction);

enum StatusCodes {
    Success = 200,
    NotFound = 404,
    InternalServerError = 500
}

let StatusCode: StatusCodes = StatusCodes.Success;
//statusCode = 50;
StatusCode = StatusCodes.NotFound;
console.log('StatusCode:', StatusCode);

enum Volumen {
    min = 1,
    medio = 5,
    max = 10
}

let volumen: Volumen = Volumen.medio;
console.log('volumen:', volumen);

//Reto
/*

Denifir una clase ENUM para su proyecto final
Tienda en linea

Estatus del pedido
Capturada
Procesada
Pagada
Enviada
Entregada

*/

enum EstatusPedido {
    Capturada = "Capturada",
    Procesada = "Procesada",
    Pagada = "Pagada",
    Enviada = "Enviada",
    Entregada = "Entregada"
}

let estatusActual: EstatusPedido;

estatusActual = EstatusPedido.Capturada;
console.log('Estatus actual del pedido:', estatusActual);

estatusActual = EstatusPedido.Pagada;
console.log('Estatus actualizado del pedido:', estatusActual);

estatusActual = EstatusPedido.Enviada;
console.log('Estatus actualizado del pedido:', estatusActual);

estatusActual = EstatusPedido.Entregada;
console.log('Estatus final del pedido:', estatusActual); 





