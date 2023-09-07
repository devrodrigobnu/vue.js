//Faça um programa que solicite ao usuário um número inteiro e exiba o resultado da multiplicação desse número por 3.

const r = require('prompt-sync')
const prompt = r()


let numero = parseInt(prompt('Digite um número inteiro: '))
let multiplica = numero * 3

console.log(`O resultado da multiplicação entre ${numero} e 3 é: ${multiplica}`)