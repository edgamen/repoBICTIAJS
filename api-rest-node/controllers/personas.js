'use strict'
 
// Cargamos el modelo para usarlo posteriormente
var Personas = require('../models/personas');
 
// Creamos un método en el controlador, en este caso una accion de pruebas
function pruebas(req, res){
 
// Devolvemos una respuesta en JSON
    res.status(200).send({
        menssage: 'Esta ruta es de prueba en mi api restful con mongo y node'
    });
}

//Guardar
function savePersonas(req, res){
 
    // Creamos el objeto Personas
var personas = new Personas();

    // Recogemos los datos que nos llegan por POST
var params = req.body;

    // Comprobamos que nos llega el nombre
if(params.nombre){
             
            // Asignamos un valor a las propiedades del objeto Personas
    personas.nombre = params.nombre;
    personas.descripcion = params.descripcion;

            // Guardamos el documento en la base de datos
    personas.save((err, personasStored) => {

                    // Si se produce un error lo devolvemos
        if(err) return res.status(500).send({message: 'Error en el servidor'});
         
                    // En el caso de que el documento se guarde tambien devolvemos el objeto guardado
        if(personasStored){
                return res.status(200).send({
                    personas: personasStored
                });
        }else{
                return res.status(200).send({
                    message: 'No se ha guardado la informacion'
                });
        }
         
    });
}else{
    return res.status(200).send({
            message: 'El nombre de la ruta es obligatorio'
        });
}
}
//Listar
function getPersonas(req, res){
 
    // Usamos el método find sobre nuesta entidad Pewrsonas y ordenamos los resultados
Personas.find({}).sort({'_id':-1}).exec((err, personas) => {
    if(err) return res.status(500).send({message: 'Error en el servidor'});
     
                 // Devolvemos el resultado de la query en json
        if(personas){
            return res.status(200).send({
                personas
            });
        }else{
            return res.status(404).send({
                message: 'No hay registros'
            });
        }
     
});
}

//Traer
function getPersonas(req, res){
    // Recogemos un parametro por la url
var personasId = req.params.id;

    // Buscamos por ID
Personas.findById(personasId).exec((err, personas) => {
    if(err) return res.status(500).send({ message: 'Error en el servidor' });
                    
                    // Devolvemos el resultado
        if(personas){
            return res.status(200).send({
                personas
            });
        }else{
            return res.status(404).send({
                message: 'No existe el registro'
            });
        }
     
});
}

//Actualizar
function updatePersonas(req, res){
    // Recogemos un parámetro por la url
var personasId = req.params.id;

    // Recogemos los datos que nos llegen en el body de la petición
var update = req.body;

    // Buscamos por id y actualizamos el objeto y devolvemos el objeto actualizado
Personas.findByIdAndUpdate(personasId, update, {new:true}, (err, personasUpdated) => {
    if(err) return res.status(500).send({message: 'Error en el servidor'});
     
        if(personasUpdated){
            return res.status(200).send({
                personas: personasUpdated
            });
        }else{
            return res.status(404).send({
                message: 'No existe el registro'
            });
        }
     
});
}
//Eliminar
function deletePersonas(req, res){
    var personasId = req.params.id;
 
        // Buscamos por ID, eliminamos el objeto y devolvemos el objeto borrado en un JSON
    Personas.findByIdAndRemove(personasId, (err, personasRemoved) => {
        if(err) return res.status(500).send({ message: 'Error en el servidor' });
         
            if(personasRemoved){
                return res.status(200).send({
                    personas: personasRemoved
                });
            }else{
                return  res.status(404).send({
                    message: 'No existe el registro'
                });
            }
         
    });
}

// Exportamos las funciones en un objeto json para poder usarlas en otros fuera de este fichero

module.exports = {
    pruebas,
    savePersonas,
    getPersonas,
    getPersonas,
    updatePersonas,
    deletePersonas
};