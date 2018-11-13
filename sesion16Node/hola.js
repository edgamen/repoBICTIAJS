var http = require("http");

var controlador = function(peticion,respuesta){
    /*var mensaje = function mensaje(){
        console.log("Yo no me llamo Javier!!");
    }
    for (contador=1;contador=10;contador++){
        setInterval('mensaje()',2000);
    }*/
    for (i = 1; i <= 5; ++i) {
        setDelay(i);
      }
      
      function setDelay(i) {
        setTimeout(function(){
          console.log(i);
        }, 2000);
      }
    //respuesta.end("Welcome to Node!");
}

var servidor = http.createServer(controlador);
servidor.listen(8124);