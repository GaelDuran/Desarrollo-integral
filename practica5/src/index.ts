let miVariable: string = 'Hola mundo';
console.log(miVariable);

const person1 = {
    firstName1: "Jonh",
    lastName1: "Doe",
    age: 50
};

let {firstName1, lastName1} = person1;
console.log(firstName1, ' ', lastName1);

let miNombre = "Gael";
let [a1, a2, a3, a4, a5]:any = miNombre;
console.log(a1,a2,a3,a4,a5);
console.log(a3);

const frutas = ["platanos", "naranjas", "manzanas", "mangos"];
let [fruta1, fruta2] = frutas;
console.log(fruta1, fruta2);

let [frutaA,,,frutaB] = frutas;
console.log(frutaA, fruta2);

class Persona {
    nombre: string;
    apellidoPaterno: string
    apellidoMaterno: string

    edad: number;
    constructor(nombre: string, apellidoPaterno: string, apellidoMaterno: string, edad: number){
        this.nombre = nombre;
        this.edad = edad;
        this.apellidoPaterno = apellidoPaterno
        this.apellidoMaterno = apellidoMaterno
    }

    getEdad(): number{
        return this.edad;
    }

    setEdad(edad: number): void {
        this.edad = edad;
    }

    getNombre(): string{
        return this.nombre
    }

    setNombre(nombre: string): void {
        this.nombre = nombre;

    }

    getApellidoPaterno(): string{
        return this.apellidoPaterno
    }

    setApellidoPaterno(apellidoPaterno: string): void {
        this.apellidoPaterno = apellidoPaterno;

    }

    getApellidoMaterno(): string{
        return this.apellidoMaterno
    }

    setApellidoMaterno(apellidoMaterno: string): void {
        this.apellidoMaterno = apellidoMaterno;

    }

    getNombreCompleto(): string{
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

interface User {
    name: string;
    id: number;
}

class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number){
        this.name = name;
        this.id = id;
    }
}

const usuarioInterface: User = new UserAccount('Imagine Dragons', 2);

console.log(usuarioInterface.name, usuarioInterface.id);

/*Reto crear al menos 5 clases que van a usar en
su proyecto, 3 propiedades, getters y setter y
al menos 1 método por clase o función, agregar
un constructor*/

class Persona1 {
    private nombre: string;
    private apellidoPaterno: string;
    private apellidoMaterno: string;
    private edad: number;

    constructor(nombre: string, apellidoPaterno: string, apellidoMaterno: string, edad: number) {
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.edad = edad;
    }

    getNombre(): string {
        return this.nombre;
    }

    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    getApellidoPaterno(): string {
        return this.apellidoPaterno;
    }

    setApellidoPaterno(apellidoPaterno: string): void {
        this.apellidoPaterno = apellidoPaterno;
    }

    getApellidoMaterno(): string {
        return this.apellidoMaterno;
    }

    setApellidoMaterno(apellidoMaterno: string): void {
        this.apellidoMaterno = apellidoMaterno;
    }

    getEdad(): number {
        return this.edad;
    }

    setEdad(edad: number): void {
        this.edad = edad;
    }

    obtenerDatos(): string {
        return `${this.nombre} ${this.apellidoPaterno} ${this.apellidoMaterno}, ${this.edad} años`;
    }
}

class Usuario extends Persona {
    private correo: string;
    private rol: string;

    constructor(nombre: string, apellidoPaterno: string, apellidoMaterno: string, edad: number, correo: string, rol: string) {
        super(nombre, apellidoPaterno, apellidoMaterno, edad);
        this.correo = correo;
        this.rol = rol;
    }

    getCorreo(): string {
        return this.correo;
    }

    setCorreo(correo: string): void {
        this.correo = correo;
    }

    getRol(): string {
        return this.rol;
    }

    setRol(rol: string): void {
        this.rol = rol;
    }

    mostrarUsuario(): string {
        return `Usuario: ${this.getNombre()} (${this.getCorreo()}), Rol: ${this.rol}`;
    }
}



class Producto {
    private nombre: string;
    private precio: number;
    private stock: number;

    constructor(nombre: string, precio: number, stock: number) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    getNombre(): string {
        return this.nombre;
    }

    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    getPrecio(): number {
        return this.precio;
    }

    setPrecio(precio: number): void {
        this.precio = precio;
    }

    getStock(): number {
        return this.stock;
    }

    setStock(stock: number): void {
        this.stock = stock;
    }

    mostrarProducto(): string {
        return `Producto: ${this.nombre}, Precio: $${this.precio}, Stock: ${this.stock} unidades`;
    }
}

class Carrito {
    private productos: Producto[];
    private total: number;

    constructor() {
        this.productos = [];
        this.total = 0;
    }

    getProductos(): Producto[] {
        return this.productos;
    }

    getTotal(): number {
        return this.total;
    }

    agregarProducto(producto: Producto): void {
        this.productos.push(producto);
        this.total += producto.getPrecio();
    }

    mostrarTotal(): string {
        return `Total del carrito: $${this.total}`;
    }
}

class MetodoDePago {
    private tipo: string;
    private numero: string;
    private vencimiento: string;

    constructor(tipo: string, numero: string, vencimiento: string) {
        this.tipo = tipo;
        this.numero = numero;
        this.vencimiento = vencimiento;
    }

    getTipo(): string {
        return this.tipo;
    }

    setTipo(tipo: string): void {
        this.tipo = tipo;
    }

    getNumero(): string {
        return this.numero;
    }

    setNumero(numero: string): void {
        this.numero = numero;
    }

    getVencimiento(): string {
        return this.vencimiento;
    }

    setVencimiento(vencimiento: string): void {
        this.vencimiento = vencimiento;
    }

    procesarPago(monto: number): string {
        return `Procesando pago de $${monto} con ${this.tipo}`;
    }
}

class Pedido {
    private carrito: Carrito;
    private metodoDePago: MetodoDePago;
    private estado: string;

    constructor(carrito: Carrito, metodoDePago: MetodoDePago) {
        this.carrito = carrito;
        this.metodoDePago = metodoDePago;
        this.estado = "Pendiente";
    }

    getCarrito(): Carrito {
        return this.carrito;
    }

    getMetodoDePago(): MetodoDePago {
        return this.metodoDePago;
    }

    getEstado(): string {
        return this.estado;
    }

    setEstado(estado: string): void {
        this.estado = estado;
    }

    procesarPedido(): string {
        if (this.carrito.getTotal() > 0) {
            this.estado = "Procesado";
            return `Pedido procesado. ${this.metodoDePago.procesarPago(this.carrito.getTotal())}`;
        } else {
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
    nombre: string;
    constructor(nombre: string){
        this.nombre = nombre;
    }

    mover(distancia: number = 0){
        //template strings
        console.log(`${this.nombre} se movio ${distancia}mts.`);
    }

    hacerSonido(sonido: string = 'Sin Sonido'){
        console.log(`${this.nombre} hace ${sonido}`);
    }
}

let animal1 = new Animal('Grillo');
animal1.mover(5);
animal1.hacerSonido('Crii Crii');

class Perro extends Animal {
    constructor(nombre: string){
        super(nombre);
    }

    mover(distancia: number = 5){
        console.log('Caminando y corriendo');
        super.mover(distancia);
    }

    hacerSonido(sonido = 'Guau'){
        console.log(`${this.nombre} hace ${sonido}`);
    }
}

const perro1 = new Perro('Firulais');
perro1.mover(10);
perro1.hacerSonido("Guau Guau");

class Serpiente extends Animal {
    constructor(nombre: string){
        super(nombre);
    }

    mover(distancia: number = 1){
        console.log('Reptando');
        super.mover(distancia);
    }

    hacerSonido(sonido = 'Siseo'){
        console.log(`${this.nombre} hace ${sonido}`);
    }
}

const serpiente1 = new Serpiente('Cobra');
serpiente1.mover(2);
serpiente1.hacerSonido("Siseo");





