// Verificar se dois números digitados pelo usuário são iguais

const r = require('prompt-sync')
const prompt = r()

let num1 = parseInt(prompt('Digite o primeiro número: '))
let num2 = parseInt(prompt('Digite o segundo número: '))

if (num1 == num2) {
    console.log('Os números são iguais!')
} else {
    console.log('Os números são diferentes!')
}