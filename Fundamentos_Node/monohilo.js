require('dotenv').config();
console.log('Hola Mundo');
let i = 0;

//setInterval(() => {
//    console.log(i);
//    i++;
//    console.log('Lleguo el tiempo');
//}, 0);

console.log('Hola Mundo');
console.log(`Tu nombre es: ${process.env.NAME || 'Anonimo'}`);
console.log(`Ciudad es: ${process.env.CITY || 'Desconocida'}`);
console.log(`Tu apellido es: ${process.env.APELLIDO || 'Anonimo'}`);