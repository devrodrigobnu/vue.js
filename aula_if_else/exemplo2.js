// Verificar se um numero é positivo

const r = require('prompt-sync')
const prompt = r()

let numero = parseInt(prompt('Digite um número: '))

if(numero >= 0) {
    console.log(`O número é positivo!`)
} else {
    console.log(`O número é negativo!`)
}