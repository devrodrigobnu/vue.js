const r = require('prompt-sync')
const prompt = r()

let idade = 19
let sexo = 'm'

if (idade >= 18 && sexo == 'm') {
    console.log('É obrigado a se alistar')
} else {
    console.log('Não pode se alistar')
}