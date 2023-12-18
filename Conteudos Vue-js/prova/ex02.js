// 2- Faça um programa que calcule a soma dos números de 1 a 100 usando um loop while.

const req = require('prompt-sync')
const prompt = req()

function Main(){
    let soma = 0
    let numero = 0
    while (numero <= 100){
        soma += numero
        numero++
    }
    return soma
} 

const resultado = Main()
console.log(`A soma dos número de 0 a 100 é: ${resultado}`)




