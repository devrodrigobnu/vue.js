// Escreva um programa que solicite ao usuário o valor de três números inteiros diferentes e exiba o resultado da soma dos três números.

const r = require('prompt-sync')
const prompt = r()

let num1 = Number(prompt('Digite o primeiro número inteiro: '))
let num2 = Number(prompt('Digite o segundo número inteiro: '))
let num3 = Number(prompt('Digite o terceiro número inteiro: '))

let soma = (num1 + num2 + num3)

console.log(`A soma entre ${num1}, ${num2} e ${num3} é: ${soma}`)