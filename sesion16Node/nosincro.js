var http = require("http");
    fs = require("fs");
/*
    fs.readFile("./index.html",function(err,html){
    http.createServer(function(req,res){
        res.write(html);
        res.end();
    }).listen(8124)
})
*/ 
//Se comenta para ver que en el siguiente codigo 
//no hay necesidad de subir y bajar el servidor


http.createServer(function(req,res){
    fs.readFile("./index.html",function(err,html){
        res.write(html);
        res.end();
    })
}).listen(8124)

