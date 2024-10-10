const fs = require('fs');
// console.log(fs);

const leerArchivo = (err, data) => {
    (err) ? console.log('Error:', err) : console.log(data.toString()); 
}

fs.readFile('archivo.txt', leerArchivo);

const escribirArchivo = (err) => (err) ? console.log('error:', err) : console.log('Se escribió correctamente');

fs.writeFile('nuevoArchivo.txt', 'Hola nuevo archivo', escribirArchivo);

fs.unlink('nuevoArchivo.txt', (err) => {
    console.log('Se eliminó el archivo');
});

fs.mkdir('nuevacarpeta', (err) => {
    console.log('Se creo la carpeta');
});

// fs,rmdir('nuevaCarpeta', (err) => {
//     console.log('Se eliminó la carpeta');
// });

fs.readdir('./', (err, files) => {
    console.log(files);
});

const copiarArchivo = (err) => (err) ? console.log('Error:', err) : console.log('Se copió el archivo');

fs.copyFile('archivo.txt','copiarArchivo.txt',copiarArchivo);

