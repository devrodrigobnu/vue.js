// Faça um programa que peça ao usuário para digitar um número e 
// imprima todos os números de 0 até o número digitado usando um loop while.
const req = require('prompt-sync')
const prompt = req()

let numero = Number(prompt('Digite um número: '))
let i = 0

while (i <= numero) {
    console.log(i)
    i++
}