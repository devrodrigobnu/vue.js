const r = require('prompt-sync')
const prompt = r()

let numero = Number(prompt('DIgite um numero de 1 a 3: '))

if (numero == 1) {
    console.log('Domingo')
} else if (numero == 2) {
    console.log('Segunda-feira')
} else if (numero == 3) {
    console.log('Terça-feira')
}