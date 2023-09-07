// Faça um programa que peça ao usuário para digitar números e 
// pare quando o usuário digitar um número negativo. Em seguida, 
// imprima a soma dos números digitados.
const req = require('prompt-sync')
const prompt = req()

let numero
let soma = 0

while (true) {
    const input = prompt('Digite um número positivo para continuar e um negativo para parar: ')

    if (input.toLowerCase() === 'sair') {
        break
    }

    numero = Number(input)

    if (isNaN(numero)) {
        console.log('Entrada inválida. Digite um número válido ou "sair" para parar.')
        continue
    }

    if (numero < 0) {
        break
    }

    soma += numero
}

console.log('A soma dos números digitados é: ' + soma)
