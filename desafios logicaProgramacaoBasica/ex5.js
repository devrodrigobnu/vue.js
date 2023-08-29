// Faça um programa que solicite ao usuário um número real e imprima a metade desse número.

const r = require('prompt-sync')
const prompt = r()

let num_real = parseInt(prompt('Digite um número real: '))
let calculo = (num_real / 2) 

console.log(`A metade de ${num_real} é: ${calculo}`)