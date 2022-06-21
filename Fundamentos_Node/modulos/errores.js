
const darError = () => 3+3;


try{
    darError();
}catch(e){
    console.log(`Error ===> ${e.message}`);
}

console.log('LLego bien hasta aqui')