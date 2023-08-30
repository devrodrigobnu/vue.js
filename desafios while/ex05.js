// Altere o programa anterior permitindo ao usuário 
// informar as populações e as taxas de crescimento iniciais. 
// Valide a entrada e permita repetir a operação.
const req = require('prompt-sync')
const prompt = req()


let cidadeA, cidadeB, taxaCrescimentoA, taxaCrescimentoB

while (isNaN(cidadeA) || isNaN(cidadeB)){
    cidadeA = Number(prompt('Digite quantos cidadãos tem na cidade A: '))
    cidadeB = Number(prompt('Digite quantos cidadãos tem na cidade B: '))

    if (isNaN(cidadeA) || isNaN(cidadeB)){
        console.log('Entrada inválida, digite novamente: ')
    }
}


while (isNaN(taxaCrescimentoA) || isNaN(taxaCrescimentoB)){
    taxaCrescimentoA = Number(prompt('Digite a taxa de crescimento anual da cidade A: '))
    taxaCrescimentoB = Number(prompt('Digite a taxa de crescimento anual da cidade B: '))

    if (isNaN(taxaCrescimentoA) || isNaN(taxaCrescimentoB)){
        console.log('Entrada inválida, digite novamente: ')
    }
}
let anos = 0

while (cidadeA < cidadeB){
    cidadeA += cidadeA * taxaCrescimentoA
    cidadeB += cidadeB * taxaCrescimentoB
    anos++
}

console.log(`Levará ${anos} anos para a população da cidade A ultrapassar ou igualar a população da cidade B.`);
