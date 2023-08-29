const req = require('prompt-sync')
const prompt = req()

// Faca um programa que peça ao usuario para digitar
// um numero e imprima a tabuada desse numero usando um loop while

let num = Number(prompt('Digite um número: '))
let i = 0
while(i < 10) {
    i++
    console.log(`${num} x ${i} = ${num * i}`)
}