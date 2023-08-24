const fs = require('fs');

const crearArchivo = (base) =>{  
 try { 

    return new Promise( (resolve,reject) => {

        console.log('===========================');
        console.log('Tabla del :',base);
        console.log('===========================');


    let salida = '';

    for( let i = 1; i <= 10; i++ ){
        salida += `${base} X ${i} = ${base * i}\n`;
    } 
    
    console.log(salida);
    
    fs.writeFileSync(`tabla-${base}.txt`, salida);
    
    resolve(`tabla-${ base}.txt creado`);
    

    })


    
 } catch (err) {
    throw err;
 }
    
} 

module.exports = {
     crearArchivo
}