// Faça um programa que peça ao usuário um número e 
// calcule e exiba a raiz quadrada desse número.

const r = require('prompt-sync')
const prompt = r()

let num = Number(prompt('Digite um número: '))
let raiz = Math.sqrt(num)

console.log(`A raiz quadrada de ${num} é ${raiz}.`)