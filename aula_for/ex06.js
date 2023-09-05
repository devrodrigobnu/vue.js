// 6. Faça um programa que leia e monte dois vetores de números inteiros 
// com 20 números cada. Depois de montados, gere um terceiro vetor formado 
// pela diferença dos dois vetores lidos, um quarto vetor formado pela soma 
// dos dois vetores lidos e por último um quinto vetor formado pela 
// multiplicação dos dois vetores lidos. 
const req = require('prompt-sync')
const prompt = req()


let vetor1 = []
for (let i = 0; i < 5; i++){
    let inserirVetor1 = parseInt(prompt(`Digite o ${i + 1}º número: `))
    vetor1.push(inserirVetor1)
}

let vetor2 = []
for (let i = 0; i < 5; i++){
    let inserirVetor2 = parseInt(prompt(`Digite o ${i + 1}º número: `))
    vetor2.push(inserirVetor2)
}

let vetorDiferenca = []
for (let elemento1 of vetor1) {
    if(!vetor2.includes(elemento1)) {
        vetorDiferenca.push(elemento1)
    }
}
console.log("Elementos em vetor1, mas não em vetor2:", vetorDiferenca)

let vetorSoma = []
if (vetor1.length === vetor2.length){
    for(let i = 0; i < vetor1.length; i++){
        let soma = vetor1[i] + vetor2[i]
        vetorSoma.push(soma)
    }
    console.log(`Resultado da soma dos vetores:`, vetorSoma)
} else {
    console.log(`Os vetores tem tamanhos diferentes.`)
}

let vetorMultiplicacao = []
if (vetor1.length === vetor2.length){
    for (let i = 0; i < vetor1.length; i++){
        let multiplicacao = vetor1[i] * vetor2[i]
        vetorMultiplicacao.push(multiplicacao)
    }
    console.log(`Resultado da multiplicação dos vetores:`, vetorMultiplicacao)
} else {
    console.log(`Os vetores tem tamanhos diferentes.`)
}









