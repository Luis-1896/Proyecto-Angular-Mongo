'use strict'

let params = process.argv.slice(2); //Obtiene desde nodeJs los parametros obtenidos como arreglo, slice(2) empieza en 2 porque en el primer regresa la ruta
//console.log(params);

let numero1 = parseFloat(params[0]);
let numero2 = parseFloat(params[1]);
//console.log(numero1, numero2);

let plantilla = `
    La suma es: ${numero1+numero2}
    La resta es: ${numero1-numero2}
    La multiplicación es: ${numero1*numero2}
    La división es: ${numero1/numero2}
`;

console.log(plantilla);