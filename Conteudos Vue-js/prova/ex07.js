// 7 - Crie um programa que solicite ao usuário uma sequência de números 
// e calcule a média dos números digitados.

const req = require('prompt-sync')
const prompt = req()

let soma = 0
let quantidade = 0

while(true){
    const numero = Number(prompt('Digite uma sequência de números para calcular a média ou "0" para parar:  '))

    if (numero === 0) {
        break
    }
    soma += numero
    quantidade++

}

if (quantidade === 0) {
    console.log('Nenhum número foi digitado.')
} else{
    const media = soma / quantidade
    console.log(`A média dos números digitados é: ${media}`)
}