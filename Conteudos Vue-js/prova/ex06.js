// 6 - Escreva um programa que solicite ao usuário para digitar um número e, 
// em seguida, imprima a tabuada desse número.

const req = require('prompt-sync')
const prompt = req()

function Main(){
    while (true) {
        const numero = Number(req('Digite um número entre 1 e 10 para descobrir sua tabuada: '));

        if (numero >= 1 && numero <= 10) {
            console.log(`Tabuada de ${numero}`)
            for (let i = 1; i <= 10; i++) {
                const resultado = numero * i
                console.log(`A tabuada de ${numero} x ${i}: ${resultado}`)
            }
            break
        } else {
            console.log('Por favor, insira um número válido: ')
        }
    }
}

Main()