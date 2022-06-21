
const saludar = (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Hola ${nombre}`);
            resolve(nombre);
        }, 1000);
    });
}

const despedir = (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Adios ${nombre}`);
            resolve();
        }, 1000);
    });
}

const hablar = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Estoy Hablando');
            reject(name);
        }, 1000);
    });
}


//? Ejecucion --------------------------------------------------

console.log('Inicio')
saludar('Carlos Jose')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(despedir)
    .then(() => {
        console.log('Termino la promesa');
    })
    .catch(err => {
        console.log('Ha ocurrido un error');
        console.log(err);
    })