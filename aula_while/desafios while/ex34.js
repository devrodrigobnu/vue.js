// 34.	Os números primos possuem várias aplicações dentro da Computação, 
// por exemplo na criptografia. Um número primo é aquele que é divisível
//  apenas por um e por ele mesmo. Faça um programa que peça um número 
//  inteiro e determine se ele é ou não um número primo.

const req = require('prompt-sync')
const prompt = req()

let number = parseInt(prompt('DIgite um número: '))
let ehPrimo = true 

for (let i = 2; i < number; i++){
    if (number % i == 0){
        ehPrimo = false
        break
    }
}

console.log(ehPrimo ? 'É um número primo' : 'Não é um número primo')