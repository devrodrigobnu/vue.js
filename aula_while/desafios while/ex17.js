// 17.	Faça um programa que calcule o fatorial de um número inteiro fornecido pelo usuário. Ex.: 5!=5.4.3.2.1=120
const req = require('prompt-sync')
const prompt = req()

let number = Number(prompt('Digite um número para calcular o fatorial: '))
let resultado = 1

if (Number.isInteger(number) && number >= 0) {
    if (number === 0) {
        console.log(`O fatorial de ${number} é 1`)
    } else {
        while (number > 0) {
            resultado = resultado * number
            number--
        }
        console.log(`O fatorial é: ${resultado}`)
    }
} else {
    console.log('Não é um inteiro válido.')
}
