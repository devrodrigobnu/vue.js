// Faça um programa que solicite ao usuário dois números inteiros e exiba a soma dos dois.

const r = require('prompt-sync')
const prompt = r()

let num1 = Number(prompt('Digite o primeiro número: '))
let num2 = Number(prompt('Digite o segundo número: '))
let soma = num1 + num2

console.log(`A soma entre ${num1} e ${num2} é: ${soma}`)
