//? Importacion de los modulos 
const express = require("express");
const  morgan = require("morgan");

//*Declaracion de una instancia
const app = express();

//!Configuramos el puerto y el espaciado json.
app.set('port',process.env.PORT || 3000);
app.set('json spaces',2);

//TODO: configuracion de morgan........
app.use(morgan("dev"));
app.use(express.urlencoded({ extended:false}));
app.use(express.json());


//*Configuramos el enrutamiento...
app.get('/',(req, res) =>{
    res.send('Hello World');
})

//?configuramos la aplicacion para que pueda escuchar solicitudes
app.listen(app.get('port'),()=>{
    console.log(`El servidor esta escuchando por el puerto ${app.get('port')} warro`);
})

//!Importamos el objeto de usuarios.
app.use(require('./controllers/UsuariosController.js'))