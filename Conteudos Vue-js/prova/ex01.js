// 1 - Escreva um programa em Javascript que verifique se um número é positivo
// negativo ou zero, depois valide se ele é par ou ímpar e exiba uma mensagem apropriada.

const req = require('prompt-sync')
const prompt = req()


function Main(){
    
    if (num > 0){
        console.log('O número é positivo.')
    } else if (num < 0) {
        console.log('O num é negativo.')
    } else 
        console.log('O número é zero')


    if (num % 2 === 0) {
        console.log(`O número ${num} é par.`)
    } else 
        console.log(`O número ${num} é ímpar.`)
    
}

let num = Number(prompt('Digite um número: '))
Main(num)
