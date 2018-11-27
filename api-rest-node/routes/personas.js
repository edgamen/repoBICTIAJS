'use strict'
 
// Cargamos el módulo de express para poder crear rutas
var express = require('express');
 
// Cargamos el controlador
var PersonasController = require('../controllers/personas');
 
// Llamamos al router
var api = express.Router();
 
// Creamos una ruta de tipo GET para el método de pruebas
api.get('/pruebas', PersonasController.pruebas);
 
// Exportamos la configuración
module.exports = api;
 
// POST para guardar nuevos documentos
api.post('/personas', PersonasController.savePersonas);
 
// GET para conseguir documentos
api.get('/personas', PersonasController.getPersonas);
api.get('/personas/:id', PersonasController.getPersonas);
 
// PUT para actualizar documentos
api.put('/personas/:id', PersonasController.updatePersonas);
 
// DELETE para eliminar documentos
api.delete('/personas/:id', PersonasController.deletePersonas);
 
module.exports = api;