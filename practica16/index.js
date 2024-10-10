const http = require('http');
const fs = require('fs');
const PUERTO = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    // Simple Router
    let ruta = './views';
    switch (req.url) {
        case '/':
            ruta += '/index.html';
            res.statusCode = 200;
            break;
        case '/about':
            ruta += '/about.html';
            res.statusCode = 200;
            break;
        case '/products':
            ruta += '/products.html';
            res.statusCode = 200;
            break;
        case '/services':
            ruta += '/services.html';
            res.statusCode = 200;
            break;
        case '/contacto':
            ruta += '/contacto.html';
            res.statusCode = 200;
            break;
        default:
            ruta += '/404.html';
            res.statusCode = 404;
            break;
    }

    // Leer el archivo y responder con el contenido
    fs.readFile(ruta, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end('404 Not Found');
        }

        // Escribe el HTML de navegación
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Mi Sitio</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" href="/">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">Acerca de</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/products">Productos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/services">Servicios</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">Contacto</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        `);
        res.write(data);
        return res.end();
    });
});

server.listen(PUERTO, () => {
    console.log(`Servidor en el puerto ${PUERTO}`);
});
