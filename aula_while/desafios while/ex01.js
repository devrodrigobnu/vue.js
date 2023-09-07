// Faça um programa que peça uma nota, entre zero e dez. 
// Mostre uma mensagem caso o valor seja inválido e continue 
// pedindo até que o usuário informe um valor válido.
const req = require('prompt-sync')
const prompt = req()


while (true){
    let number = parseFloat(prompt('Enter a value between 0 and 10: '))

    if(isNaN(number) || number < 0 || number > 10){
        console.log('Invalid note. Please enter a valid value.')
    } else{
        console.log('Valid note')
        break
    }
}

