// Faça um programa que peça ao usuário para digitar uma palavra 
// e imprima cada letra da palavra em uma linha separada usando um loop while.

const req = require('prompt-sync')
const prompt = req()

let palavra = prompt('Digite uma palavra: ')
let i = 0

while (i < palavra.length) {
    console.log(palavra[i])
    i++
}