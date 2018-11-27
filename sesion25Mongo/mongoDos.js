dos = {producto: "leggins", precio:30}
tres = {producto: "busos", precio:60}
          
cuatro = {producto: "anillos", precio:5}
cinco = {producto: "anillos", precio:15}
       
seis = {producto: "botas", precio: 80}
         
siete = {producto: "botas", precio: 100}
          
ocho = {producto: "botas", precio: 150}


npm install babel-core babel-loader babel-preset-env babel-preset-react html-webpack-plugin --save-dev

#consulta
          
db.tienda.aggregate({$group: {_id:"$producto"}})      
    
#cantidad        
db.tienda.aggregate({$group: {_id:"$producto", "cantidad" : {$sum:1}}})         
      
#conteo
db.tienda.aggregate({$group: {_id:"$producto", "Precio total" : {$sum:"$precio"}}})
           
 
          
        
#        
db.juego.update({}, {$set: {"protagonista.puede nadar":"no"}})     
          
#          
db.juego.find({"protagonista.puedenadar":"no"})
          