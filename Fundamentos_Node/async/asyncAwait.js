
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
            resolve(name);
        }, 1000);
    });
}


//? Ejecucion --------------------------------------------------

async function saludarAsync(nombre) {
    await saludar(nombre);
    await hablar();
    await hablar();
    await hablar();
    await despedir(nombre);
}

saludarAsync('Carlos Jose')