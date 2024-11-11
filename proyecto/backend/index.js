const express = require('express');
const app = express();

const productosRoutes = require('./routes/productosRoutes');
const usuariosRoutes = require('./routes/usuariosRoutes');
const categoriaRoutes = require('./routes/categoriasRoutes');

const mongoose = require('mongoose');
const conexion = require('./conexion');

mongoose.connect(conexion)
    .then(() => {
        console.log('Conexión a la base de datos establecida');
    })
    .catch((err) => {
        console.log('Error al conectar a la base de datos', err);
    });


app.listen(3000, () => {
    console.log('Server running on port 3000');
});


app.use(productosRoutes);
app.use(usuariosRoutes);
