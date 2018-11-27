var fs = require('fs'),
          	file = './juegos.txt',
        		newFile = './juegos_CALLBACK.txt'
fs.access(file, fs.F_OK, function(err){
            if(err){
              console.log('Archivo Inexistente')
            }else{
              console.log('el archivo existe')
              fs.readFile(file, function(err,data){
                if(err){
                  console.log('no se pudo leer el archivo')
                }else{
                  console.log('se ha leido exitosamente el archivo')
                  fs.writeFile(newFile, data, function(err){
                    return(err) ? console.log('No se pudo copiar el archivo'): console.log('el archivo se ha copiado')
                  })
                }
              })
            }
          })