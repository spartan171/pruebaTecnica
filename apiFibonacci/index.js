const express = require('express');
const bodyParser = require('body-parser');
const {config} = require('./config/config');
const routerApi = require('./routes/')

const app = express();
const port = config.apiPort;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

app.get('/', function(req, res){    
    res.send(
        {   
            "Proyecto":"Api para prueba tecnica",
            "Mensaje": "Bienvenido",
            "Autor":"Oscar Arredondo"
        }
    );
})

routerApi(app);

//Iniciando el servidor
app.listen(port,()=>{
    console.log(`El servidor esta escuchando en el puerto: ${port}`);
    console.log(`http://localhost:${port}/`);
});