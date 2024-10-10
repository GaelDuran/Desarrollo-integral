const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hola practica 12');
});

app.get('/productos', (req, res) => {
    res.send('Estamos en productos');
});

app.listen(3000, () => {
    console.log('Server on port 3000');
});