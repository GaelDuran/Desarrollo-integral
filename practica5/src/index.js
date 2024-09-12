"use strict";
let miVariable = 'Hola mundo';
console.log(miVariable);
const person1 = {
    firstName1: "Jonh",
    lastName1: "Doe",
    age: 50
};
let { firstName1, lastName1 } = person1;
console.log(firstName1, ' ', lastName1);
let miNombre = "Gael";
let [a1, a2, a3, a4, a5] = miNombre;
console.log(a1, a2, a3, a4, a5);
console.log(a3);
const frutas = ["platanos", "naranjas", "manzanas", "mangos"];
let [fruta1, fruta2] = frutas;
console.log(fruta1, fruta2);
let [frutaA, , , frutaB] = frutas;
console.log(frutaA, fruta2);
class Persona {
    constructor(nombre, apellidoPaterno, apellidoMaterno, edad) {
        this.nombre = nombre;
        this.edad = edad;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
    }
    getEdad() {
        return this.edad;
    }
    setEdad(edad) {
        this.edad = edad;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getApellidoPaterno() {
        return this.apellidoPaterno;
    }
    setApellidoPaterno(apellidoPaterno) {
        this.apellidoPaterno = apellidoPaterno;
    }
    getApellidoMaterno() {
        return this.apellidoMaterno;
    }
    setApellidoMaterno(apellidoMaterno) {
        this.apellidoMaterno = apellidoMaterno;
    }
    getNombreCompleto() {
        return this.nombre + ' ' + this.apellidoPaterno + ' ' + this.apellidoMaterno;
    }
}
let personaje1 = new Persona('Alberto', 'Perez', 'Lopez', 30);
console.log(personaje1.edad);
console.log(personaje1.nombre);
//personaje1.edad = 'Hola';
personaje1.edad = 25;
console.log(personaje1.edad);
let personaje2 = new Persona('Carlos', 'Alonso', 'Romero', 19);
personaje2.setEdad(20);
console.log('Nombre:' + personaje2.getNombre());
console.log('Edad:' + personaje2.getEdad());
console.log(personaje1.getNombreCompleto());
class UserAccount {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const usuarioInterface = new UserAccount('Imagine Dragons', 2);
console.log(usuarioInterface.name, usuarioInterface.id);
/*Reto crear al menos 5 clases que van a usar en
su proyecto, 3 propiedades, getters y setter y
al menos 1 método por clase o función, agregar
un constructor*/
class Persona1 {
    constructor(nombre, apellidoPaterno, apellidoMaterno, edad) {
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.edad = edad;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getApellidoPaterno() {
        return this.apellidoPaterno;
    }
    setApellidoPaterno(apellidoPaterno) {
        this.apellidoPaterno = apellidoPaterno;
    }
    getApellidoMaterno() {
        return this.apellidoMaterno;
    }
    setApellidoMaterno(apellidoMaterno) {
        this.apellidoMaterno = apellidoMaterno;
    }
    getEdad() {
        return this.edad;
    }
    setEdad(edad) {
        this.edad = edad;
    }
    obtenerDatos() {
        return `${this.nombre} ${this.apellidoPaterno} ${this.apellidoMaterno}, ${this.edad} años`;
    }
}
class Usuario extends Persona {
    constructor(nombre, apellidoPaterno, apellidoMaterno, edad, correo, rol) {
        super(nombre, apellidoPaterno, apellidoMaterno, edad);
        this.correo = correo;
        this.rol = rol;
    }
    getCorreo() {
        return this.correo;
    }
    setCorreo(correo) {
        this.correo = correo;
    }
    getRol() {
        return this.rol;
    }
    setRol(rol) {
        this.rol = rol;
    }
    mostrarUsuario() {
        return `Usuario: ${this.getNombre()} (${this.getCorreo()}), Rol: ${this.rol}`;
    }
}
class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getPrecio() {
        return this.precio;
    }
    setPrecio(precio) {
        this.precio = precio;
    }
    getStock() {
        return this.stock;
    }
    setStock(stock) {
        this.stock = stock;
    }
    mostrarProducto() {
        return `Producto: ${this.nombre}, Precio: $${this.precio}, Stock: ${this.stock} unidades`;
    }
}
class Carrito {
    constructor() {
        this.productos = [];
        this.total = 0;
    }
    getProductos() {
        return this.productos;
    }
    getTotal() {
        return this.total;
    }
    agregarProducto(producto) {
        this.productos.push(producto);
        this.total += producto.getPrecio();
    }
    mostrarTotal() {
        return `Total del carrito: $${this.total}`;
    }
}
class MetodoDePago {
    constructor(tipo, numero, vencimiento) {
        this.tipo = tipo;
        this.numero = numero;
        this.vencimiento = vencimiento;
    }
    getTipo() {
        return this.tipo;
    }
    setTipo(tipo) {
        this.tipo = tipo;
    }
    getNumero() {
        return this.numero;
    }
    setNumero(numero) {
        this.numero = numero;
    }
    getVencimiento() {
        return this.vencimiento;
    }
    setVencimiento(vencimiento) {
        this.vencimiento = vencimiento;
    }
    procesarPago(monto) {
        return `Procesando pago de $${monto} con ${this.tipo}`;
    }
}
class Pedido {
    constructor(carrito, metodoDePago) {
        this.carrito = carrito;
        this.metodoDePago = metodoDePago;
        this.estado = "Pendiente";
    }
    getCarrito() {
        return this.carrito;
    }
    getMetodoDePago() {
        return this.metodoDePago;
    }
    getEstado() {
        return this.estado;
    }
    setEstado(estado) {
        this.estado = estado;
    }
    procesarPedido() {
        if (this.carrito.getTotal() > 0) {
            this.estado = "Procesado";
            return `Pedido procesado. ${this.metodoDePago.procesarPago(this.carrito.getTotal())}`;
        }
        else {
            return "El carrito está vacío. No se puede procesar el pedido.";
        }
    }
}
let producto1 = new Producto("Laptop", 1500, 5);
let producto2 = new Producto("Mouse", 20, 50);
console.log(producto1.mostrarProducto());
console.log(producto2.mostrarProducto());
let usuario1 = new Usuario("Juan", "Pérez", "Gómez", 30, "juan.perez@example.com", "Cliente");
console.log(usuario1.mostrarUsuario());
let carrito1 = new Carrito();
carrito1.agregarProducto(producto1);
carrito1.agregarProducto(producto2);
console.log(carrito1.mostrarTotal());
let metodoDePago1 = new MetodoDePago("Tarjeta de Crédito", "123456789", "12/25");
let pedido1 = new Pedido(carrito1, metodoDePago1);
console.log(pedido1.procesarPedido());
//Herencia
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    mover(distancia = 0) {
        //template strings
        console.log(`${this.nombre} se movio ${distancia}mts.`);
    }
    hacerSonido(sonido = 'Sin Sonido') {
        console.log(`${this.nombre} hace ${sonido}`);
    }
}
let animal1 = new Animal('Grillo');
animal1.mover(5);
animal1.hacerSonido('Crii Crii');
class Perro extends Animal {
    constructor(nombre) {
        super(nombre);
    }
    mover(distancia = 5) {
        console.log('Caminando y corriendo');
        super.mover(distancia);
    }
    hacerSonido(sonido = 'Guau') {
        console.log(`${this.nombre} hace ${sonido}`);
    }
}
const perro1 = new Perro('Firulais');
perro1.mover(10);
perro1.hacerSonido("Guau Guau");
class Serpiente extends Animal {
    constructor(nombre) {
        super(nombre);
    }
    mover(distancia = 1) {
        console.log('Reptando');
        super.mover(distancia);
    }
    hacerSonido(sonido = 'Siseo') {
        console.log(`${this.nombre} hace ${sonido}`);
    }
}
const serpiente1 = new Serpiente('Cobra');
serpiente1.mover(2);
serpiente1.hacerSonido("Siseo");
