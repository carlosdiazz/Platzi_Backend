//? Para encriptar una contraseña

const bcrypt = require('bcrypt');

const password = '1234segura!'; // password to encrypt

bcrypt.hash(password, 5, (err, hash)=>{
    console.log(hash);
})

bcrypt.compare(password,'$2b$05$Q8REy2FlWx7tlR4WwuKYV./msxZWfXq4n4dCC0xdUFFFGR.EbmmKu',(err, hash)=>{
    console.log(hash);
})