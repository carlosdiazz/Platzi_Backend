const express = require('express');
const response = require('../../network/response');
const router = express.Router();

router.get('/',(req,res) => {
    //console.log(req.headers); // Muestra los headers de la peticion
    console.log('HICIERON UNA SOLICITUD GET A USER');
    res.header({
        'custom-header': 'Header Propio',
    })
    //res.send('Mostrando Usuarios')
    response.success(req,res,'Mostrando usuarios',200);
}); // GET

router.delete('/',(req,res) => {
    res.send('Usuario Publicado')
}); // Delete

router.post('/',(req,res)=>{
    console.log(req.query);
    console.log(req.body);
    //res.send('Usuario Eliminado')}); // DELETE
    //res.status(201).send({"error": "", "body": "Usuario Eliminado"});
    if(req.query.error == 'true'){
        response.error(req,res,'Error al eliminar usuario', 500, 'Error en el servidor');
    }else{
        response.success(req,res,'Usuario Agregado',201);
    }
}); // DELETE

module.exports = router;