// 15 - A série de Fibonacci é formada pela sequência 1,1,2,3,5,8,13,21,34,55,... 
// Faça um programa capaz de gerar a série até o n−ésimo termo.
const prompt = require('prompt-sync')()
let numero = parseInt(prompt('Entre com um número para calcular a série Fibonacci: '))
let primeiroNumero = 1, segundoNumero = 0
const fibonacci = []

for (let i = 0; i < numero; i++){
    fibonacci.push(segundoNumero)
    const temporiario = primeiroNumero
    primeiroNumero = primeiroNumero + segundoNumero
    segundoNumero = temporiario

}

console.log(fibonacci)