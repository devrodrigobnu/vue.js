// 2.	Escreva um programa que peça ao usuário um número e imprima o resultado da multiplicação desse número por 10.

const r = require('prompt-sync')
const prompt = r()

let num1 = Number(prompt('Digite um número: '))
let multiplica = num1 * 10

console.log(`A multiplicação entre ${num1} e 10 é: ${multiplica}`)