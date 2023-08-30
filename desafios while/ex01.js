// Faça um programa que peça uma nota, entre zero e dez. 
// Mostre uma mensagem caso o valor seja inválido e continue 
// pedindo até que o usuário informe um valor válido.
const req = require('prompt-sync')
const prompt = req()


while (true){
    let num = parseFloat(prompt('Digite um valor entre 0 e 10: '))

    if(isNaN(num) || num < 0 || num > 10){
        console.log('Nota inválida. Digite um valor válido')
    } else{
        console.log('Nota válida')
        break
    }
}

