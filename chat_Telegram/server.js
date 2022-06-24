const express = require('express');
const router = express.Router();
const response = require('./network/response');

var app = express();

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(router);

router.get('/user',(req,res) => {
    console.log(req.headers); // Muestra los headers de la peticion
    res.header({
        'custom-header': 'Header Propio',
    })
    //res.send('Mostrando Usuarios')
    response.success(req,res,'Mostrando usuarios',200);
}); // GET

router.delete('/user',(req,res) => {
    res.send('Usuario Publicado')}); // Delete

router.post('/user',(req,res)=>{
    console.log(req.query);
    console.log(req.body);
    //res.send('Usuario Eliminado')}); // DELETE
    //res.status(201).send({"error": "", "body": "Usuario Eliminado"});
    if(req.query.error == 'true'){
        response.error(req,res,'Error al eliminar usuario');
    }else{
        response.success(req,res,'Usuario Agregado',201);
    }
}); // DELETE


app.listen(3000,()=>{console.log('Server is running on port 3000')});