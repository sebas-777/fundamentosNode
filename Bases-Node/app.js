
const {crearArchivo} = require('./helpers/multiplicar');

console.clear();

const base = 50;

crearArchivo( base)
    .then(nombreArchivo => console.log(nombreArchivo,'creado'))
    .catch(err => console.log(err));





