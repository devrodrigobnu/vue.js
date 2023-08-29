const r = require('prompt-sync')
const prompt = r()

// Criar um programa que permita o usuário entrar com o preço
// de um produto, se o preço do produto for maior que R$100 
// aplique um desconto de 30%

function Main(preco) {
    if (preco >= 100) {
        novoPreco = preco - (preco * (30 / 100))
        console.log(`Novo preço do produto: R$${novoPreco.toFixed(2)}`)
    } else {
        console.log(`O produto permanece com o mesmo preço: R$${preco.toFixed(2)}`)
    }
}

let preco = Number(prompt('Digite o preço do produto: R$'))
Main(preco)