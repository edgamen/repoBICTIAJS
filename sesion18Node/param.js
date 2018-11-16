var http = require('http');
    fs = require('fs');

    http.createServer(function(req,res)){

        fs.readFile("{./index.html", function(err, html){

            var html_string= html.toString();
            var arreglos_param = [], parametros = {};
            var variables = html_string.match(/[^\{\}]+(?=\})/g);
            if(req.url.indexOf("?")>0){
                var url_data = req.url.split("?")
                var arreglos_param = url_data[1].split("&")

            }

            for(var i = arre)
        })
    }