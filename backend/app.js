'use strict'

let express = require('express');
let bodyParser = require('body-parser');


let app = express();


// cargar archivos de rutas
let project_routes = require('./routes/project');


//middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); //Convierte todo lo que llegue a bodyParser a json


//CORS
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//rutas
app.use('/api', project_routes);


//exportar
module.exports = app;





/**
 *                  SON EJEMPLOS DE RUTAS
 */
/*app.get('/', (req, res) => {
    res.status(200).send(
        "<h1>Página de Inicio</h1>"
    );
});

app.get('/test', (req, res) => {
    res.status(200).send({
        mensage: "Hola mundo desde mi API de NodeJs"
    });
});*/

/**EJEMPLO CON POST PARA OBTENER LOS VALORES QUE ME ENVIA POSTMAN */
/*app.post('/test/:id', (req, res) => {
    console.log(req.body.nombre, req.body.edad);
    console.log(req.query.web);
    console.log(req.params.id);
    res.status(200).send({
        mensage: "Hola mundo desde mi API de NodeJs"
    });
});*/