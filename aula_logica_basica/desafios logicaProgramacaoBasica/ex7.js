// Faça um programa que solicite ao usuário um número e calcule e exiba o quadrado desse número.

const r = require('prompt-sync')
const prompt = r()

let num = Number(prompt('Digite um número: '))
let quadrado = num * num

console.log(`O quadrado de ${num} é: ${quadrado}`)
console.log(`${num}² =  ${math.pow(num,2)}`)
