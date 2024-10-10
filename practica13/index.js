const fs = require('fs');
const path = require('path');

// Función para leer el contenido de un archivo
const leerArchivo = (err, data) => {
    if (err) {
        console.log('Error:', err);
    } else {
        console.log(data.toString());
    }
};

fs.readFile('archivo.txt', leerArchivo);

// Función para escribir en un archivo
const escribirArchivo = (err) => {
    if (err) {
        console.log('Error:', err);
    } else {
        console.log('Se escribió correctamente');
    }
};

fs.writeFile('nuevoArchivo.txt', 'Hola nuevo archivo', escribirArchivo);

// Eliminar un archivo
fs.unlink('nuevoArchivo.txt', (err) => {
    if (!err) {
        console.log('Se eliminó el archivo');
    }
});

// Crear una nueva carpeta
fs.mkdir('nuevacarpeta', (err) => {
    if (!err) {
        console.log('Se creó la carpeta');
    }
});

// Eliminar una carpeta
// fs.rmdir('nuevacarpeta', (err) => {
//     if (!err) {
//         console.log('Se eliminó la carpeta');
//     }
// });

// Listar todos los archivos y carpetas en el directorio actual
fs.readdir('./', (err, files) => {
    if (err) {
        console.log('Error:', err);
    } else {
        console.log(files);
    }
});

// Copiar un archivo
const copiarArchivo = (err) => {
    if (err) {
        console.log('Error:', err);
    } else {
        console.log('Se copió el archivo');
    }
};

fs.copyFile('archivo.txt', 'copiarArchivo.txt', copiarArchivo);

// Función para listar archivos y carpetas con Bootstrap Icons
fs.readdir('./', (err, files) => {
    if (err) {
        console.log('Error:', err);
    } else {
        // Creamos el HTML básico
        let html = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Listado de Archivos y Carpetas</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
            </head>
            <body>
                <div class="container mt-5">
                    <h1>Archivos y Carpetas</h1>
                    <ul class="list-group">
        `;

        files.forEach(file => {
            const filePath = path.join(__dirname, file);
            const stats = fs.statSync(filePath);

            // Diferenciamos entre archivo y carpeta usando íconos de Bootstrap
            if (stats.isDirectory()) {
                html += `<li class="list-group-item"><i class="bi bi-folder-fill"></i> ${file}</li>`;
            } else {
                html += `<li class="list-group-item"><i class="bi bi-file-earmark-text"></i> ${file}</li>`;
            }
        });

        // Cerramos el HTML
        html += `
                    </ul>
                </div>
            </body>
            </html>
        `;

        // Guardamos el HTML en un archivo
        fs.writeFile('index.html', html, (err) => {
            if (err) {
                console.log('Error escribiendo el HTML:', err);
            } else {
                console.log('Se generó el archivo HTML con el listado de archivos y carpetas.');
            }
        });
    }
});
