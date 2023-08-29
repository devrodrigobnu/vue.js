// 12.	Faça um programa para o cálculo de uma folha de pagamento, 
// sabendo que os descontos são do Imposto de Renda, que depende do salário bruto 
// (conforme tabela abaixo) e 3% para o Sindicato e que o FGTS corresponde a 11% do 
// Salário Bruto, mas não é descontado (é a empresa que deposita). O Salário Líquido 
// corresponde ao Salário Bruto menos os descontos. O programa deverá pedir ao usuário o 
// valor da sua hora e a quantidade de horas trabalhadas no mês.
// Desconto do IR:
// Salário Bruto até 900 (inclusive) - isento
//Salário Bruto até 1500 (inclusive) - desconto de 5%
// Salário Bruto até 2500 (inclusive) - desconto de 10%
// Salário Bruto acima de 2500 - desconto de 20% Imprima na tela as informações, 
// dispostas conforme o exemplo abaixo. No exemplo o valor da hora é 5 e a quantidade 
// de hora é 220.
// Salário Bruto: (5 * 220)        : R$ 1100,00
// (-) IR (5%)                     : R$   55,00  
// (-) INSS ( 10%)                 : R$  110,00
// FGTS (11%)                      : R$  121,00
// Total de descontos              : R$  165,00
// Salário Liquido                 : R$  935,00

function Main(salario_bruto) {
    let imposto_renda;
    if (salario_bruto <= 900) {
        imposto_renda = 0
    } else if (salario_bruto <= 1500) {
        imposto_renda = 0.05 
    } else if (salario_bruto <= 2500) {
        imposto_renda = 0.10
    } else {
        imposto_renda = 0.20
    }
    
    let desconto_ir = salario_bruto * imposto_renda
    let desconto_inss = salario_bruto * 0.10
    let fgts = salario_bruto * 0.11
    desconto_sindicato = salario_bruto * 0.03;
    let total_descontos = desconto_ir - desconto_inss 
    let salario_liquido = salario_bruto - total_descontos

    console.log(`Salário bruto: R$${salario_bruto}`)
    console.log(`IR: R$${desconto_ir}`)   
    console.log(`INSS: R$${desconto_inss}`)
    console.log(`FGTS: R$${fgts}`)
    console.log(`Total descontos: R$${total_descontos}`)
    console.log(`Salário líquido: R$${salario_liquido}`)

}

let valor_hora = parseInt(prompt('Informe o valor hora do funcionário: '))
let horas_trabalhadas = parseInt(prompt('Informe as horas trabalhadas pelo funcionário: '))
let salario_bruto = valor_hora * horas_trabalhadas;
Main(salario_bruto);





