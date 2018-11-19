var http = require('http'),
    path = require('path'),
    url = require('url'),
    urls = [
        {
            id :1,
            ruta : '',
            salida : '<h2>Home</h2>'
        },

        {
            id :2,
            ruta : 'acerca',
            salida : '<h2>Acerca</h2>'
        },

        {
            id :3,
            ruta : 'contacto',
            salida : '<h2>Contacto</h2>'
        }
    ]

http.createServer(function(req,res){
    var mensaje = 'Bienvenido',
        pathUrl = path.basename(req.url),
        id = url.parse(req.url,true).query.id

        console.log(`path: ${pathUrl} // id: ${id}`)

    urls.forEach(function(posicion){
        if(posicion.ruta == pathUrl || posicion.id == id){
            res.writeHead(200, {'Content-Type' : 'text/html'})
            res.end(mensaje + posicion.salida)
        }
    })

    if(!res.finished){
        res.writeHead(404, {'Content-Type' : 'text/html'})
        res.end('<h1>Error 404: Not Found</h1>')
    }
   
}).listen(8080)