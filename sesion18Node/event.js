var EventEmitter = require("events").EventEmitter,
publicar = new EventEmitter()

publicar.on("mievento", function(mensaje){
    console.log(mensaje)
})

publicar.once("mievento", function(mensaje){
    console.log("Solo mostrar una vez "+ mensaje)
})

publicar.emit("mievento", "soy un emisor de eventos(first time)")
//publicar.emit("mievento", "emitiendo segunda vez")
//publicar.removeAllListeners("mievento")
//node publicar.emit("mievento", "tercera emision")