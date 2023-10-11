// 4) Conversor de Moedas
// Crie um conversor de moedas em uma página web. 
// O usuário deve inserir um valor em reaç, com 3 botao (Dolar, Euro e Iene)
// Quando clicar em um desses botões calcular e mostrar 
// o resultado da respectiva conversão 


function converterMoeda(moeda) {
    // Armazena taxa de conversão em uma variável
    const taxaDolar = 5.09
    const taxaEuro = 5.40
    const taxaIene = 0.034
    // Obtém valor em real do usuário
    const valorReais = Number(document.getElementById("valorReais").value)
    let resultado = 0

    // Verifica se o número é válido e calcula em seguida
    if (!isNaN(valorReais)) {
        if (moeda === "dolar") {
            resultado = valorReais * taxaDolar
        } else if (moeda === "euro") {
            resultado = valorReais * taxaEuro
        } else if (moeda === "iene") {
            resultado = valorReais * taxaIene
        }
        // Exibe o resultado da conversão
        document.getElementById("resultado").textContent = `Valor em ${moeda.toUpperCase()}: ${resultado.toFixed(2)}`
    
}
}