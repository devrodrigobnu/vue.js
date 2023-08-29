// Faça um programa que peça ao usuário para digitar números e 
// pare quando o usuário digitar um número negativo. Em seguida, 
// imprima a soma dos números digitados.

const req = require('prompt-sync')
const prompt = req()

let numero
let soma = 0

while (true) {
    numero = Number(prompt('Digite um número positivo para continuar e um negativo para parar: '))

    if (numero < 0) {
        break
    }

    soma += numero
}

console.log('A soma dos números digitados é: ' + soma)