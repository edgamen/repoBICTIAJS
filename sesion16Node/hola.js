var http = require("http");

var controlador = function(peticion,respuesta){
    /*var mensaje = function mensaje(){
        console.log("Yo no me llamo Javier!!");
    }
    for (contador=1;contador=10;contador++){
        setInterval('mensaje()',2000);
    }*/
    setTimeout('console.log("Yo no me llamo Javier!! No!!")', 2000);
    console.log("Yo no me llamo Javier!!");
    //respuesta.end("Welcome to Node!");
}

var servidor = http.createServer(controlador);
servidor.listen(8124);