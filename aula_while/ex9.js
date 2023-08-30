// Faça um programa que peça ao usuário para digitar dois números 
// e imprima todos os números entre eles usando um loop while.

const req = require('prompt-sync')
const prompt = req()

let inicial = Number(prompt('Digite o número inicial: '))
let final = Number(prompt('Digite o número final: '))

let i = inicial

while(inicial <= final){
    console.log(inicial)
    inicial++
}