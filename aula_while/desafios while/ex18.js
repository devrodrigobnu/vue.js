// 18.	Faça um programa que, dado um conjunto de N números, determine o menor valor, o maior valor e a soma dos valores.

const prompt = require('prompt-sync')()

let num = []
let i = 0

while(i < 5) {
    num[i] = Number(prompt(`Digite o ${1+i} numero: `))
    i++
}

let maiorValor = Math.max(num)
let menorValor = Math.min(num)

console.log(`Maior ${maiorValor}`)
console.log(`Menor ${menorValor}`)
console.log(maiorValor + menorValor)