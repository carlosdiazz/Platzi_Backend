const isOdd = require("is-odd");

//Esto pasa antes de que el programa termine
process.on('beforeExit',()=>{
    console.log('Se va a salir');
})

//Esto pasa despues de que el programa termine
process.on('exit',() => {
    console.log('Saliendo del programa');
})

//Con esto si opasa un error que no se controla lo puedo manejar
process.on('uncaughtException',() => {
    console.log('Paso un Error que no se Capturo');
})

console.log('Fin del programa');

