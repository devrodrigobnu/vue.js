// 32.	Faça um programa que calcule o fatorial de um número 
// inteiro fornecido pelo usuário. Ex.: 5!=5.4.3.2.1=120. 
// A saída deve ser conforme o exemplo abaixo:
// Fatorial de: 5
// 	5! =  5 . 4 . 3 . 2 . 1 = 120

const req = require('prompt-sync')
const prompt = req()

let numero = Number(prompt('Digite um número: '))
let fatorial = 1

for (let i = 1; i <= numero; i++){
    fatorial *= i
}

console.log(`O fatorial de ${numero} é ${fatorial}`)