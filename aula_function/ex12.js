// Crie uma função que receba um número como parâmetro e 
// retorne true se o número for primo e false se não for.
const req = require('prompt-sync')
const prompt = req()

function ehPrimo(numero) {
    for (let i = 2; i < numero; i++){
        if (numero % i == 0){
            console.log('Não é primo.')
        } else {
            console.log('É primo')
        }
        break
    }    
}
let input = Number(prompt('Digite um número: '))
ehPrimo(input)

