// Faça um programa que leia 5 números e informe o maior número.
const req = require('prompt-sync')
const prompt = req()


let largest_number = 0

for (let i = 1; i <= 5; i++){
    let number = parseFloat(prompt(`Enter the ${i}º number: `))

    if(!isNaN(number > largest_number)){
        largest_number = number
    } else {
        console.log('Invalid value.')
        i--
    }
}

console.log(`The largest number is: ${largest_number}`)