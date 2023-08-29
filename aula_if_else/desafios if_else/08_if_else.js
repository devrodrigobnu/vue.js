// Faça um programa que pergunte o preço de três produtos e 
// informe qual produto você deve comprar, 
// sabendo que a decisão é sempre pelo mais barato.
const req = require('prompt-sync')
const prompt = req()

function Main(p1, p2, p3){
    let menor = Math.min(p1, p2, p3)

    if (menor === p1) {
        console.log('Você deve comprar o 1º produto com preço: R$' + p1)
    } else if (menor === p2) {
        console.log('Você deve comprar o 2º produto com preço: R$' + p2)
    } else {
        console.log('Você deve comprar o 3º produto com preço: R$' + p3)
    }
    
}

let p1 = parseFloat(prompt('Informe o preço do 1º produto: '))
let p2 = parseFloat(prompt('Informe o preço do 2º produto: '))
let p3 = parseFloat(prompt('Informe o preço do 3º produto: '))

Main(p1, p2, p3)