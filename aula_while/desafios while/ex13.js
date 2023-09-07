// Faça um programa que peça dois números, base e expoente, 
// calcule e mostre o primeiro número elevado ao segundo número.
// Não utilize a função de potência da linguagem

const req = require('prompt-sync')
const prompt = req()

let base = Number(prompt('Enter the base number: '))
let exponent = Number(prompt('Enter the exponent number: '))

let result = 1

for (let i = 0; i < exponent; i++){
    result *= base
}

console.log(`The number ${base} elevate for ${exponent} is equal ${result}`)