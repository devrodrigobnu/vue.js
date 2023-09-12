// 31.	O Sr. Manoel Joaquim expandiu seus negócios para além dos negócios de 1,99 
// e agora possui uma loja de conveniências. Faça um programa que implemente uma caixa 
// registradora rudimentar. O programa deverá receber um número desconhecido de valores 
// referentes aos preços das mercadorias. Um valor zero deve ser informado pelo operador 
// para indicar o final da compra. O programa deve então mostrar o total da compra e perguntar 
// o valor em dinheiro que o cliente forneceu, para então calcular e mostrar o valor do troco. 
// Após esta operação, o programa deverá voltar ao ponto inicial, para registrar a próxima compra.
//  A saída deve ser conforme o exemplo abaixo:
// Lojas Tabajara 
// Produto 1: R$ 2.20
// Produto 2: R$ 5.80
// Produto 3: R$ 0
// Total: R$ 9.00
// Dinheiro: R$ 20.00
// Troco: R$ 11.00
// 	...

const req = require('prompt-sync')
const prompt = req()

console.log('LOJAS TABAJARA')
let valorTotal = 0
let i = 0

while (true){
    let valor = parseFloat(prompt(`Informe o valor do ${i+1}º produto (ou 0 para sair): `))
    if (valor === 0){
        break
    }
    valorTotal += valor
    i++
}
console.log(`Total: R$${valorTotal.toFixed(2)}`)

while(true){
    let dinheiro = parseFloat(prompt('Valor pago em dinheiro: R$'))
    if (dinheiro < valorTotal){
        console.log('Dinheiro insuficiente. Informe um valor igual ou maior.')
    } else {
        let troco = dinheiro - valorTotal
        console.log(`Troco: R$${troco.toFixed(2)}`)
        break
    }
}