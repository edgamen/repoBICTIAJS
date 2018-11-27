// Utilizar nuevas funcionalidades del Ecmascript 6
'use strict'
 
// Cargamos los módulos de express y body-parser
var express = require('express');
var bodyParser = require('body-parser');
 
// Llamamos a express para poder crear el servidor
var app = express();
 
// Aquí cargaremos la configuración de rutas posteriormente
// Importamos las rutas
var personas_routes = require('./routes/personas');
 
// Configuramos bodyParser para que convierta el body de nuestras peticiones a JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
 
// Aquí configuraremos el CORS posteriormente
 
// Aquí configuraremos rutas
// Cargamos las rutas
app.use('/api', personas_routes);

//app.get('/mi-prueba', (req, res) => {
//    return res.status(200).send({
//       message: 'Método de prueba del API REST'
//    });
//});
 
// Por ultimo exportamos este módulo para poder usar la variable app fuera de este archivo
module.exports = app;
