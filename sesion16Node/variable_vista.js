var http = require("http");
fs = require("fs");
http.createServer(function(req,res){
    fs.readFile("./index.html", function(err,html){
        var html_string = html.toString(); //convierte el html a solo caracteres

        var variables = html_string.match(/[^\{\}]+(?=\})/g);//valida concordancia de caracteres
        var nombre = "Node JS";
        var apellido = "Sutano";
        var suma1 = 2+2;
        var suma2 = "2+2";


        for(var i = variables.length-1;i >= 0; i--){
            var value = eval(variables[i]);//convierte lo que encuentra a su equivalente en codigo JS
            html_string = html_string.replace("{"+variables[i]+"}",value);
        }
        res.write(html_string);
        res.end();
    })
}).listen(8124)