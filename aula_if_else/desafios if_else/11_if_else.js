//  As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores 
// e lhe contrataram para desenvolver o programa que calculará os reajustes.
// 	Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, 
// baseado no salário atual:
// 	salários até R$ 280,00 (incluindo) : aumento de 20%
// 	salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
// 	salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
// 	salários de R$ 1500,00 em diante : aumento de 5% 
//  Após o aumento ser realizado, informe na tela:
// 	o salário antes do reajuste;
// 	o percentual de aumento aplicado;
// 	o valor do aumento;
// 	o novo salário, após o aumento.


function Main(salario) {
    if (salario <= 280) {
        porcentagem = 0.2
    } else if (salario <= 700) {
        porcentagem = 0.15
    } else if (salario <= 1500) {
        porcentagem = 0.10
    } else {
        porcentagem = 0.05
    }

    salario_ajustado = (salario * porcentagem) + salario
    console.log('O salário antes do reajuste era: R$' + salario)
    console.log('O percentual aplicado para o salario R$' + salario + ' é ' + porcentagem   )
    let valor_aumento = salario * porcentagem
    console.log('O valor de aumento foi: R$' + valor_aumento)
    console.log('O novo salário é: R$' + salario_ajustado)
    
}


let salario = parseInt(prompt('Informe o salário do funcionário: '))
Main(salario)