const req = require('prompt-sync')
const prompt = req()
// Faça um programa que imprima os números pares de 1 a 20
//  usando um loop while.

let num = Number(prompt('Digite um número: '))
let i = 0
while (i <= 20){
    console.log(i)
    i++
}
