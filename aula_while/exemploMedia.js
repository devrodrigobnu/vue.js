const prompt = require('prompt-sync')()

let num

while (true) {
    const input = prompt('Quantas notas serão cadastradas: ')

    if (!isNaN(input)) {
        num = Number(input)
        break
    } else {
        console.log('Por favor, insira um número válido.')
    }
}

let i = 0
let notas = []
let soma = 0

while (i < num) {
    notas[i] = Number(prompt(`Digite a ${i + 1}ª nota: `))
    soma += notas[i]
    i++
}

console.log(`A média das notas é: ${soma / num}`)
