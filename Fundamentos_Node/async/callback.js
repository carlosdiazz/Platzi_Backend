
const Hola = (name, callback) => {
    setTimeout(() => {
        console.log(`Hola ${name}`);
        callback(name);
    }, 3000);
}

const Adios = (name, callback) => {
    setTimeout(() => {
        console.log(`Adios ${name}`);
        callback();
    }, 1000);
}

const hablar = (callback) => {
    setTimeout(() => {
        console.log('Estoy Hablando');
        callback();
    }, 1000);
}

const conversacion = (name,veces,callback) => {
    if(veces > 0){
        hablar(() => {
            conversacion(name,veces-1,callback);
        });
    }else{
        Adios(name,callback);
    }
}


//? --------------------------------------------------
console.log('Inicio');

Hola('Carlos Jose', ()=>conversacion('Carlos Jose',2,()=>{console.log('Fin')}));



//Hola('Carlos Jose', (nombre) => {
//    hablar(()=>
//        Adios(nombre, () => {
//            console.log('Fin');
//    }))
//})