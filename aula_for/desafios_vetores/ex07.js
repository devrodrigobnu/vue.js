// 7. Utilizando vetores, crie um programa que organize 
// uma quantidade qualquer de números inteiros fornecidos 
// pelo usuário da seguinte forma: primeiro os números pares 
// em ordem crescente e depois os números ímpares em ordem 
// decrescente. 
const req = require('prompt-sync')
const prompt = req()

let inteiros = []

const quantidadeNumeros = parseInt(prompt("Digite a quantidade de números inteiros que deseja inserir: "));

for (let i = 0; i < quantidadeNumeros; i++) {
    let inserirInteiros = parseInt(prompt(`Digite o ${i + 1}º número inteiro: `));
    inteiros.push(inserirInteiros)
}

let paresCrescente = []

for (let i = 0; i < inteiros.length; i++) {
    if (inteiros[i] % 2 === 0) {
        paresCrescente.push(inteiros[i])
    }
}

for (let i = 0; i < paresCrescente.length - 1; i++) {
    for (let j = 0; j < paresCrescente.length - i - 1; j++) {
        if (paresCrescente[j] > paresCrescente[j + 1]) {
            let ordemCrescente = paresCrescente[j]
            paresCrescente[j] = paresCrescente[j + 1]
            paresCrescente[j + 1] = ordemCrescente
        }
    }
}

console.log("Números pares em ordem crescente:", paresCrescente)
