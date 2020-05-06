'use strict'

let mongoose = require('mongoose');
let app = require('./app');
let port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio').then(() => {
    console.log("Conexión con exito a la BD");

    //Creación del servidor
    app.listen(port, () => {
            console.log("servidor corriendo correctamente en la url localhost:3700");

        }) //listen() es de express, primer parametro es puerto despues el callback

}).catch(err => console.log(err));