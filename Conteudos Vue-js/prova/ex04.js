// 4.	Escreva um programa que determine se um ano é bissexto ou não. 
// Um ano bissexto é divisível por 4, mas não por 100, 
// a menos que também seja divisível por 400.
const req = require('prompt-sync')
const prompt = req()

function Main(ano) {
    if (ano%4==0 && ano%100!=0 || ano%400==0) {
        console.log(`O ano ${ano} é bissexto.`)
    } else 
    console.log(`O ano ${ano} não é bissexto.`)
}       

let ano = parseInt(prompt('Digite um ano: '))
Main(ano)