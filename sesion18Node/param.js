var http = require('http');
    fs = require('fs');

    http.createServer(function(req,res)){

        fs.readFile("{./index.html", function(err, html){

            var html_string= html.toString();
            var arreglos_param = [], parametros = {};
            var variables = html_string.match(/[^\{\}]+(?=\})/g);
        })
    }