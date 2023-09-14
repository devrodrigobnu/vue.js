// Crie uma função que receba uma string como parâmetro 
// e retorne true se a string for um palíndromo e false se não for.
const req = require('prompt-sync')
const prompt = req()

function ehPalindromo(string){
    const reverseString = string.split('').reverse().join('')
    return string === reverseString
}

let input = prompt('Digite uma palavra: ')
let resultado = ehPalindromo(input)
console.log(resultado)