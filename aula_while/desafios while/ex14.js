// Faça um programa que peça 10 números inteiros, 
// calcule e mostre a quantidade de números pares e a 
// quantidade de números ímpares.

const prompt = require('prompt-sync')()

let pares = 0
let impares = 0

for (i = 0; i < 10; i++){
    const numero = Number(prompt('Digite um número: '))
    console.log(`Número ${i + 1}: ${numero}`)

    if (numero % 2 === 0){
        console.log(`O número ${numero} é par.`)
        pares++
    } else {
        console.log(`O número ${numero} é impar.`)
    }
}

console.log(`Quantidade de números pares: ${pares}`)
console.log(`Quantidade de números ímpares: ${impares}`)










