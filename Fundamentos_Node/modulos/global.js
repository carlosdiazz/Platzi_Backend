
let i = 0

let intervalo = setInterval(() => {
    console.log(i)
    i++
    if(i == 2){
        clearInterval(intervalo)
    }
}, 0)

setImmediate(() => {
    console.log('Inicio')
})

console.log(__dirname)