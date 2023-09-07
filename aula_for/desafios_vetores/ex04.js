// 4. Ler um vetor de 10 elementos inteiros e positivos. 
// Criar um segundo vetor da seguinte forma: os elementos 
// de índice par receberão os respectivos elementos divididos 
// por 2; os elementos de índice ímpar receberão os respectivos 
// elementos multiplicados por 3. Imprima os dois vetores. 


const req = require('prompt-sync')
const prompt = req()

let numeros = []
for (let i = 0; i < 10; i++) {
    numeros[i] = Number(prompt('Digite 10 números: '))
}

let numeros2 = []
for (let i = 0; i < 10; i++){
    if (i % 2 == 0)
        numeros2[i] = numeros[i]/2
    else
        numeros2[i] = numeros[i]*3
}

console.log('Números digitados:', numeros)
console.log('Números calculados:', numeros2)