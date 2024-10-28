const express = require('express');
const router = express.Router();

const blogs = [
    { titulo: 'Articulo 1', autor: 'Diego Rojas', contenido: 'Lorem ipsum dolor sit amet' },
    { titulo: 'Articulo 2', autor: 'Pablo Rojas', contenido: 'Lorem ipsum dolor sit amet' },
    { titulo: 'Articulo 3', autor: 'Carlos Rojas', contenido: 'Lorem ipsum dolor sit amet' },
    { titulo: 'Articulo 4', autor: 'Diana Rojas', contenido: 'Lorem ipsum dolor sit amet' },
    { titulo: 'Articulo 5', autor: 'Julio Rojas', contenido: 'Lorem ipsum dolor sit amet' },
    { titulo: 'Articulo 6', autor: 'Alberto Rojas', contenido: 'Lorem ipsum dolor sit amet' }
];


router.get('/articulos', (req, res) => {
    res.send('articulos', { titulo: 'Articulos', articulos: articulos});
});