const fs = require('fs').promises;

const leer = async(ruta) => {
    try{
        const contenido = await fs.readFile(ruta,'utf-8');
        console.log(contenido);
    }catch(err){
        console.log(err)
    }

}

const escribir = async(ruta,contenido) => {
    fs.writeFile(ruta,contenido,(err) => {
        if(err) {
            console.log('HUBO UN ERROR')
        }else{
            console.log('ARCHIVO CREADO')
        }
    })
}

const borrar = async(ruta) => {
    fs.unlink(ruta,(err) => {
        if(err) {
            console.log('HUBO UN ERROR')
        }else{
            console.log('ARCHIVO BORRADO')
        }
    })
}
leer(__dirname + '/archivo.txt')
escribir(__dirname + '/archivo1.txt','Hola Mundo')
borrar(__dirname + '/archivo1.txt')