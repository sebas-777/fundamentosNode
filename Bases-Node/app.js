
const {crearArchivo} = require('./helpers/multiplicar');

console.clear();

console.log(process.argv)

const base = 50;

crearArchivo( base)
    .then(nombreArchivo => console.log(nombreArchivo,'creado'))
    .catch(err => console.log(err));





