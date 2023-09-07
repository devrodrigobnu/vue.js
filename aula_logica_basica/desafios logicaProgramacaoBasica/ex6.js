// Escreva um programa que peça ao usuário dois números inteiros e 
// exiba o resultado da divisão do primeiro número pelo segundo.

const r = require('prompt-sync')
const prompt = r()

let num1 = Number(prompt('Digite um número: '))
let num2 = Number(prompt('Digite outro número: '))
let divisao = (num1 / num2)

console.log(`A divisão entre ${num1} e ${num2} é: ${divisao}`)