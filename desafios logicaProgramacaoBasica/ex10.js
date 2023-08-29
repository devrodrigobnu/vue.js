// Escreva um programa que peça ao usuário dois números inteiros e exiba o resultado da subtração do primeiro número pelo segundo.

const r = require('prompt-sync')
const prompt = r()


let num1 = parseInt(prompt('Digite um número: '))
let num2 = parseInt(prompt('Digite outro número: '))
let subtração = (num1 - num2)

console.log(`O resultado da subtração entre ${num1} - ${num2} é: ${subtração}`)