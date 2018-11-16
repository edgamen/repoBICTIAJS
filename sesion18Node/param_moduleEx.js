function lecturaParam(req){
    var arreglos_param = [], parametros = {}
    if (req.url.indexOf("?")>0){
        var url_data = req.url.split("?")
        var arreglos_param = url_data[1].split("&")
    }
    for(var i = arreglos_param.length - 1; i>=0; i--){
        
    }
}