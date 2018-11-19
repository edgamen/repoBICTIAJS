var http=require('http'),
    fs=require('fs'),
    index =fs.createReadStream('./index.html')

function servidor(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    index.pipe(res)
}

http.createServer(servidor).listen(8080)
console.log('conectado')