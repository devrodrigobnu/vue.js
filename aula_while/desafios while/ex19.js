// 19.	Altere o programa anterior para que ele aceite apenas números entre 0 e 1000.
const req = require('prompt-sync')
const prompt = req()

let lista = []
let i = 0

while (i < 5){
    let number = Number(prompt(`Digite o ${i + 1}º número: `))

    if (number > 0 && number <= 1000){
        lista.push(number)
        console.log('Número válido!')
    } else {
        console.log('Número inválido!')
    }
    i++
}

let maiorValor = Math.max(...lista)
let menorValor = Math.min(...lista)

console.log(`Maior ${maiorValor}`)
console.log(`Menor ${menorValor}`)