//  Um funcionário de uma empresa recebe aumento salarial anualmente: Sabe-se que:
// 	Esse funcionário foi contratado em 1995, com salário inicial de R$ 1.000,00;
// 	Em 1996 recebeu aumento de 1,5% sobre seu salário inicial;
// 	A partir de 1997 (inclusive), os aumentos salariais sempre correspondem ao 
//  dobro do percentual do ano anterior. Faça um programa que determine o salário
//  atual desse funcionário. Após concluir isto, altere o programa permitindo que 
//  o usuário digite o salário inicial do funcionário.

const req = require('prompt-sync')
const prompt = req()


const salarioInicial = parseFloat(prompt('Digite o salario inicial do funcionário: '))
let salarioAtual = salarioInicial

const aumento1996 = 1.5/100

for (let i = 1996; i <= 2023; i++){
    let aumentoAno = aumento1996 * 2
    salarioAtual += salarioAtual * aumentoAno
}

console.log(`O salário atual do funcionário é de: R$${salarioAtual.toFixed(2)}`)