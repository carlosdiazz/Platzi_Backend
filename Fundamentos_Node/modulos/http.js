const http = require('http');

http.createServer((req, res) => {
    console.log('Nueva peticion');
    console.log(req.url);
    res.write('Hola')
    res.end()
}).listen(3000);

console.log('Escuchando en el puerto 3000');