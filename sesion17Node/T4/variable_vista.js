var http = require("http");
fs = require("fs");
http.createServer(function(req,res){
    fs.readFile("./index.html", function(err,html){
        var html_string = html.toString(); //convierte el html a solo caracteres

        var variables = html_string.match(/[^\{\}]+(?=\})/g);//valida concordancia de caracteres
        var nombre = "Fulano";
        var apellido = "Sutano";
        var edad = 45;
        var instituto1 = "Sena"
        var instituto2 = "Bictia";


        for(var i = variables.length-1;i >= 0; i--){
            var value = eval(variables[i]);//convierte lo que encuentra a su equivalente en codigo JS
            html_string = html_string.replace("{"+variables[i]+"}",value);
        }
        res.write(html_string);
        res.end();
    })
}).listen(8124)
