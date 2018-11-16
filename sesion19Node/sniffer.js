var http = require("http"),
opciones = {
    host : "",
    port : 80,
    path : "/"
},
htmlCode = ""

function httpCliente(res){
    console.log(`El sitio ${opciones.host} responde. Estado: ${res.statusCode}`)
    res.on("data", function(data){
        htmlCode += data
        console.log(data,data.toString())
    })
}

function httpError(err){
    console.log(`El sitio ${opciones.host} NO responde. Estado: ${err.code}`)
}

function servidor(req,res){
    res.writeHead(200, {"Content-Type" : "text/html"})
    res.end(htmlCode)
}

http.get(opciones,httpCliente).on("error", httpError)
http.createServer(servidor).listen(8124)