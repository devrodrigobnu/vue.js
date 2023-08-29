// 28.	O Hipermercado Tabajara está com uma promoção de 
// carnes que é imperdível. Confira:
//                     Até 5 Kg             Acima de 5 Kg
// File Duplo      R$ 4,90 por Kg          R$ 5,80 por Kg
// Alcatra         R$ 5,90 por Kg          R$ 6,80 por Kg
// Picanha         R$ 6,90 por Kg          R$ 7,80 por Kg
// Para atender a todos os clientes, cada cliente poderá 
// levar apenas um dos tipos de carne da promoção, 
// porém não há limites para a quantidade de carne por 
// cliente. Se compra for feita no cartão Tabajara o cliente
// receberá ainda um desconto de 5% sobre o total da compra. 
// Escreva um programa que peça o tipo e a quantidade 
// de carne comprada pelo usuário e gere um cupom fiscal, 
// contendo as informações da compra: tipo e quantidade 
// de carne, preço total, tipo de pagamento, valor do 
// desconto e valor a pagar.

function CalculaValorAPagar(file, alcatra, picanha, pagaCartao) {
    const precoFile = file <= 5 ? 4.90 : 5.80
    const precoAlcatra = alcatra <= 5 ? 5.90 : 6.80
    const precoPicanha = picanha <= 5 ? 6.90 : 7.80
    
    const totalCarne = (file * precoFile) + (alcatra * precoAlcatra) + (picanha * precoPicanha)
    
    let tipoPagamento = 'Dinheiro'
    let valorDesconto = 0

    if (pagaCartao) {
        tipoPagamento = 'Cartão tabajara'
        valorDesconto = totalCarne * 0.05

    }

    const valorAPagar = totalCarne - valorDesconto
    return {
        precoFile,
        precoAlcatra,
        precoPicanha,
        totalCarne,
        tipoPagamento,
        valorDesconto,
        valorAPagar
    }
}

function Main() {
    let file = parseFloat(prompt('Informe a quantidade de file: '))
    let alcatra = parseFloat(prompt('Informe a quantidade de alcatra: '))
    let picanha = parseFloat(prompt('Informe a quantidade de picanha: '))

    const pagaCartao = confirm('A compra será feita com Cart]ao Tabajara? (sim ou não)')
    const resultado = CalculaValorAPagar(file, alcatra, picanha, pagaCartao)

    console.log(`Preço do file duplo: ${resultado.precoFile.toFixed(2)}`)
    console.log(`Preço da alcatra: ${resultado.precoAlcatra.toFixed(2)}`)
    console.log(`Preço da picanha: ${resultado.precoPicanha.toFixed(2)}`)
    console.log(`Total da compra: ${resultado.totalCarne.toFixed(2)}`)
    console.log(`Tipo de pagamento: ${resultado.tipoPagamento}`)
    console.log(`Valor do desconto: ${resultado.valorDesconto.toFixed(2)}`)
    console.log(`Valor a pagar: ${resultado.valorAPagar.toFixed(2)}`)
}

Main()