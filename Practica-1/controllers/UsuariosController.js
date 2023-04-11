const Usuarios = require("../models/UsuariosModel.js");
const { Router } =require("express");
const UserController = Router();


//!Mostrar los usuarios que estan almacenados en el objeto.
UserController.get('/users',(req,res)=>{
     res.status(200).json(Usuarios);
});

//?Leer un usuario por id.

//*Crear un usuario.
UserController.post('/users',(req,res)=>{
    const{Nombres,Apellidos,Telefono,Email,Password} = req.body;
    const NuevoUsuario = {id:Usuarios.length + 1,Nombres,Apellidos,Telefono,Email,Password}
    Usuarios.push(NuevoUsuario);
    res.status(200).json(NuevoUsuario);
})

//*Editar un usuario.
UserController.put('/users/:id',(req,res)=>{
    const{Nombres,Apellidos,Telefono,Email,Password} = req.body;
    const id = parseInt(req.params.id);
    const indice=Usuarios.findIndex((i)=> i.id === id);
    if (indice !== -1)
    {
        Usuarios[indice].Nombres=Nombres;
        Usuarios[indice].Apellidos=Apellidos;
        Usuarios[indice].Telefono=Telefono;
        Usuarios[indice].Email=Email;
        Usuarios[indice].Password=Password;
        res.status(200).json(Usuarios[indice]);
    }
    else
    {
        res.status(404).json({message:"El usuario no existe"});
    }
    
})

//*Eliminar un usuario.
UserController.delete('/users/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const indice=Usuarios.findIndex((i)=> i.id === id);
    if (indice !== -1)
    {
        Usuarios.splice(indice,1);
        res.status(200).json({message:"El usuario ha sido eliminado"});
    }
    else
    {
        res.status(404).json({message:"El usuario no existe"});
    }
    
})

//exportamos el objeto para poder utilizarlo
module.exports= UserController