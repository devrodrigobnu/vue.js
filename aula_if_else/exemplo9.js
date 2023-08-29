const r = require('prompt-sync')
const prompt = r()


// Criar um sistema que permita o usuário entrar com sua idade, e então, classifique-o
// com os seguintes valores:
// Até 13 anos = criança
// até 21 anos = adolescente
// até 65 anos = adulto
// acima de 65 = idoso


function Main(idade) {
    if (idade <= 13) {
        console.log(`Você tem ${idade} anos, portanto, é uma criança`)
    } else if (idade <= 21) {
        console.log(`Você tem ${idade} anos, portanto, é um adolescente`)
    } else if (idade <= 64) {
        console.log(`Você tem ${idade} anos, portanto, é um adulto`)
    } else {
        console.log(`Você tem ${idade} anos, portanto, é um idoso`)
    }
}

let idade = Number(prompt('DIgite a sua idade: '))
Main(idade)