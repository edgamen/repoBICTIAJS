var http = require("http");

var controlador = function(peticion,respuesta){
    /*var mensaje = function mensaje(){
        console.log("Yo no me llamo Javier!!");
    }*/
    setTimeout('console.log("Yo no me llamo Javier!!")', 2000)
    //console.log("recibido");
    //respuesta.end("Welcome to Node!");
}

var servidor = http.createServer(controlador);
servidor.listen(8124);