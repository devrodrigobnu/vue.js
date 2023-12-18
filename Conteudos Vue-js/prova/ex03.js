// 3 - Escreva um programa que peça ao usuário para adivinhar um número secreto. 
// Se o palpite estiver incorreto, dê dicas se o número secreto é maior ou menor. 
// Continue pedindo palpites até que o usuário adivinhe corretamente.
const req = require('prompt-sync')
const prompt = req()

const numeroSecreto = Math.floor(Math.random() * 100) + 1

let tentativas = 0
while (true) {
    const palpite = parseInt(req('Adivinhe um número entre 1 e 100: '))
    tentativas++

    if (palpite === numeroSecreto) {
        console.log(`Parabéns, você informou o número secreto: ${numeroSecreto}`)
    } else if (palpite < numeroSecreto) {
        console.log('O número secreto informado é inválido, tente um número maior: ')
    } else {
        console.log('O número secreto informado é inválido, tente um número menor: ')
    }
}

