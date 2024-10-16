const express = require('express');

const app = express();

// View engine es un motor de plantillas que permite renderizar vistas
// Usaremos el motor de plantillas EJS
// para instalar EJS: npm install ejs
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    
    const blogs = [
        { titulo: 'Articulo 1', autor: 'Diego Rojas', contenido: 'Lorem ipsum dolor sit amet' },
        { titulo: 'Articulo 2', autor: 'Pablo Rojas', contenido: 'Lorem ipsum dolor sit amet' },
        { titulo: 'Articulo 3', autor: 'Carlos Rojas', contenido: 'Lorem ipsum dolor sit amet' },
        { titulo: 'Articulo 4', autor: 'Diana Rojas', contenido: 'Lorem ipsum dolor sit amet' },
        { titulo: 'Articulo 5', autor: 'Julio Rojas', contenido: 'Lorem ipsum dolor sit amet' },
        { titulo: 'Articulo 6', autor: 'Alberto Rojas', contenido: 'Lorem ipsum dolor sit amet' }
    ];

    //res.sendFile( __dirname + '/views/inicio.html')
    res.render('inicio', { titulo: 'INICIO NUEVO', blogs });
});

app.get('/nosotros', (req, res) => {
    res.sendFile(__dirname + '/views/nosotros.html');
})

app.get('/productos', (req, res) => {
    res.sendFile(__dirname + '/views/productos.html');
});

app.get('/contacto', (req, res) => {
    res.redirect('/nosotros.html')
})

// Middleware para manejar errores
app.use((req, res) => {
    res.status(404).sendFile(__dirname + '/views/404.html')
})

app.listen(3000, () => {
    console.log("Servidor activo en el puerto 3000")
});
