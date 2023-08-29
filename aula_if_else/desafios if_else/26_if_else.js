// Um posto está vendendo combustíveis com a seguinte tabela de descontos:
// Álcool: até 20 litros, desconto de 3% por litro
// acima de 20 litros, desconto de 5% por litro
// Gasolina até 20 litros, desconto de 4% por litro
// acima de 20 litros, desconto de 6% por litro 
// Escreva um algoritmo que leia o número de litros vendidos, o tipo de combustível (codificado da seguinte forma:
// A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se 
// que o preço do litro da gasolina é R$ 2,50 o preço do litro do álcool é R$ 1,90.

function Main() {
    
    let escolha = prompt("Escolha uma opção:\n1-Gasolina\n2-Álcool");
    const precoGasolina = 2.50
    const precoAlcool = 1.90
    let descontoGasolina;
    let descontoAlcool;

    switch(escolha) {
        case '1':
            let gasolinaVendida = Number(prompt('Digite a quantidade de gasolina vendida: '))
            if (gasolinaVendida <= 20) {
                descontoGasolina = 0.04
            } else {
                descontoGasolina = 0.06
            }
            let precoFinalGasolina = (precoGasolina - (precoGasolina * descontoGasolina)) * gasolinaVendida;
            console.log(`Valor final da gasolina com desconto aplicado: ${precoFinalGasolina}`)
            break
        case '2':
            let alcoolVendido = Number(prompt('Digite a quantidade de álcool vendido em litros: '))
            if (alcoolVendido <= 20) {
                descontoAlcool = 0.03 
            } else {
                descontoAlcool = 0.05
            }
            let precoFinalAlcool = (precoAlcool - (precoAlcool * descontoAlcool)) * alcoolVendido 
            console.log(`Valor final do álcool com desconto aplicado: ${precoFinalAlcool}`)
            break
        default:
            console.log('Opção inválida!')
    }
}


Main()
