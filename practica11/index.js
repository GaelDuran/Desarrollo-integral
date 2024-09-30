const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

app.listen('/productos', () => {
    console.log('Estoy en PRODUCTOS');
});