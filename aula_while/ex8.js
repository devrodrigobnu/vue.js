// Faça um programa que peça ao usuário para digitar um número 
// e calcule o fatorial desse número usando um loop while.

const req = require('prompt-sync')
const prompt = req()

let num = Number(prompt('Digite um número: '))

if(isNaN(num)){
    console.log('Não é um número, digite um valor válido!')
} else{
    let contador = 1
    let fatorial = 1

    // Calculando o fatorial utilizando while

    while(contador <= num){
        fatorial *= contador
        contador++
    }
console.log('O resultado é:'+fatorial)

}
