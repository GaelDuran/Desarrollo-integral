"use strict";
// Enums
var Color;
(function (Color) {
    Color[Color["Rojo"] = 0] = "Rojo";
    Color[Color["Verde"] = 1] = "Verde";
    Color[Color["Azul"] = 2] = "Azul";
})(Color || (Color = {}));
console.log(Color.Verde);
//Color.Rojo = 100;
console.log(Color.Rojo);
let color1 = Color.Rojo;
color1 = Color.Verde;
//color1 = 20;
console.log('color1', color1);
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections["Norte"] = "Norte";
    CardinalDirections["Sur"] = "Sur";
    CardinalDirections["Este"] = "Este";
    CardinalDirections["Oeste"] = "Oeste";
})(CardinalDirections || (CardinalDirections = {}));
let direction = CardinalDirections.Norte;
console.log('direction', direction);
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["InternalServerError"] = 500] = "InternalServerError";
})(StatusCodes || (StatusCodes = {}));
let StatusCode = StatusCodes.Success;
//statusCode = 50;
StatusCode = StatusCodes.NotFound;
console.log('StatusCode:', StatusCode);
var Volumen;
(function (Volumen) {
    Volumen[Volumen["min"] = 1] = "min";
    Volumen[Volumen["medio"] = 5] = "medio";
    Volumen[Volumen["max"] = 10] = "max";
})(Volumen || (Volumen = {}));
let volumen = Volumen.medio;
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
var EstatusPedido;
(function (EstatusPedido) {
    EstatusPedido["Capturada"] = "Capturada";
    EstatusPedido["Procesada"] = "Procesada";
    EstatusPedido["Pagada"] = "Pagada";
    EstatusPedido["Enviada"] = "Enviada";
    EstatusPedido["Entregada"] = "Entregada";
})(EstatusPedido || (EstatusPedido = {}));
let estatusActual;
estatusActual = EstatusPedido.Capturada;
console.log('Estatus actual del pedido:', estatusActual);
estatusActual = EstatusPedido.Pagada;
console.log('Estatus actualizado del pedido:', estatusActual);
estatusActual = EstatusPedido.Enviada;
console.log('Estatus actualizado del pedido:', estatusActual);
estatusActual = EstatusPedido.Entregada;
console.log('Estatus final del pedido:', estatusActual);
