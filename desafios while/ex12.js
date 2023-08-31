// Desenvolva um gerador de tabuada, capaz de gerar a tabuada 
// de qualquer número inteiro entre 1 a 10. O usuário deve informar 
// de qual número ele deseja ver a tabuada. A saída deve ser conforme 
// o exemplo abaixo:
// Tabuada de 5:
// 5 X 1 = 5
// 5 X 2 = 10
// 5 X 10 = 50

const req = require('prompt-sync')
const prompt = req()


// Input user
let number = parseInt(prompt('Enter a number between 1 and 10 to see its multiplication table: '))

// Checking if's
if (number < 1 && number > 10){
    console.log('Number out of valid range!')
} else {
    console.log(`Multiplication table of ${number}`)
}

// for
for (let i = 1; i <= 10; i++){
    const result = number * i
    console.log(`${number} x ${i} = ${result}`)
}