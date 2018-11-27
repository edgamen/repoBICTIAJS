var fs = require('fs'),
          	file = './juegos.txt',
        		newFile = './juegos_PROMISES.txt',
				promise = new Promise((resolve, reject)=>{
            		fs.access(file, fs.f_OK, function(err){
              			return(err) ? reject(new Error('ARCHIVO INEXISTENTE')): resolve(true)
            })
          })
         
          promise.then((dataPromise)=>{
            console.log('el archivo existe')
            return new Promise ((resolve, reject)=>{
              fs.readFile(file, function(err,data){
                return(err) ? reject(new Error('PROBLEMAS AL LEER EL ARCHIVO')) : resolve(data)
              })
         })     
          
}).then((dataPromise)=>{
    console.log('LECTURA EXITOSA DE ARCHIVO')
    return new Promise((resolve,reject)=>{
        fs.writeFile(newFile,dataPromise,function(err){
          return(err) ? reject(new Error('NO FUE POSIBLE COPIAR EL ARCHIVO')):resolve('SE HA LEIDO EXITOSAMENTE EL ARCHIVO')
        })
    })

}).then((dataPromise)=>{
            console.log(dataPromise)
            
          }).catch((err)=>{
            console.log(err.message)
          })