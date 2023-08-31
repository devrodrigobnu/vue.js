// Faça um programa que leia 5 números e informe a sum e a média dos números.

const req = require('prompt-sync')
const prompt = req()

let sum = 0

for (let i = 1; i <= 5; i++){
    const number = parseFloat(prompt(`Enter the ${i}º number: `))

    if (!isNaN(number)){
        sum += number
    } else{
        console.log('Invalid value.')
        i--
    }
}

const media = sum / 5
console.log(`The sum of the numbers is: ${sum}`) 
console.log(`The average of the numbers is: ${media}`) 