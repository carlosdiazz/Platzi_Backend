//Modulo apra manejar imagenes

const sharp = require('sharp');

sharp('oficial.png')
    .resize(300)
    .toFile('resized.jpg', (err, info) => {
        console.log(info);
        console.log(err);
    });