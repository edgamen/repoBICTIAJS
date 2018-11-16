var http=require("http"),
    fs=require('fs'),
    exportar=require("./param_moduleEx.js")
    var ex=exportar.exportarFuncion
    http.createServer(function(req,res){
        fs.readFile("./index.html",function(err,html){
            var html_string=html.toString()
            var variables=html_string.match(/[^\{\}]+(?=\})/g)

            var parametros=ex(req)

            for(var i=variables.length-1;i>=0;i--){
                var variable=variables[i]
                
            }
        })
    })