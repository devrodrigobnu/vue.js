//Escreva um programa que peça ao usuário dois números reais e exiba o resultado da multiplicação dos dois

const r = require('prompt-sync')
const prompt = r()


let num1 = parseFloat(prompt('Digite um número: '))
let num2 = parseFloat(prompt('Digite outro número: '))
let resultado = (num1 * num2)

console.log(`O resultado da multiplicação entre ${num1} e ${num2} é: ${resultado}`)
