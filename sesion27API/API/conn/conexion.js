const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
          
const app = express();
          const config = require('./db');
          const PORT = 4000;
          app.use(bodyParser.json());
          
          mongoose.connect(config.DB, {useNewUrlParser: true}).then(
          ()=>{console.log(`conexion exitosa`)},
          	error => {console.log(`Error en la conexion:
													${error}`)
          });
          app.listen(PORT, function(){
            console.log(`ejecutandose en el puerto: ${PORT}`);
          });

