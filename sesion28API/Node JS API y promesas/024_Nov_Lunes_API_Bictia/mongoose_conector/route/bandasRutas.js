const express = require('express')
const router = express.Router()
const Banda = require('../modelo/bandasModelo')

// Agregar
router.post('/bandas', function(req,res,next){
    Banda.create(req.body).then(function(banda){
        res.send(banda)
    }).catch(next)
})

// Consultar
router.get('/bandas', function(req,res,next){
    Banda.find({activa:false}).then(function(bandas){
        res.send(bandas)
    }).catch(next)
})

// Actualizar
router.put('/bandas/:id', function(req,res,next){
    Banda.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Banda.findOne({_id: req.params.id}).then(function(banda){
            res.send(banda)
        })
    }).catch(next)
})

//Eliminar
router.delete('/bandas/:id', function(req,res,next){
    Banda.findOneAndRemove({_id: req.params.id}).then(function(banda){
        res.send(banda)
    }).catch(next)
})

module.exports = router