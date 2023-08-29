// Verificar se a altura de alguém é maior que 3m, se for, informe para essa possa que ela é um gigante
const r = require('prompt-sync')
const prompt = r()

let altura = parseFloat(prompt('Digite a altura da pessoa em metros: '))

if (altura > 3) {
    console.log(`Você possui ${altura} metros de altura e é um gigante!`) 
} else {
    console.log(`Você possui ${altura} e não é um gigante!`)
}