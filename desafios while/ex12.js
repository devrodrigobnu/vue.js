// Desenvolva um gerador de tabuada, capaz de gerar a tabuada 
// de qualquer número inteiro entre 1 a 10. O usuário deve informar de 
// qual número ele deseja ver a tabuada. A saída deve ser conforme o exemplo 
// Tabuada de 5:
// 5 X 1 = 5
// 5 X 2 = 10
// 5 X 10 = 50
const req = require('prompt-sync')
const prompt = req()


const number = Number(prompt('Enter a number between 1 and 10: '))

if (number >= 1 && number <= 10){
    console.log(`Tabuada de ${number}`)
    for (let i = 1; i < 10; i++){
        const result = number * i
        console.log(`A tabuada de ${number} x ${i}: ${result}`)
    }    
} else {
    console.log('Please enter a number between 1 and 10.')
}

