// 5. Ler um vetor com 10 nomes de pessoas, 
// após pedir que o usuário digite um nome qualquer 
// de pessoa. Escrever a mensagem “ACHEI”, se o nome 
// estiver armazenado no vetor C ou “NÃO ACHEI” caso 
// contrário. 
const req = require('prompt-sync')
const prompt = req()

let nomes = []

for (let i = 0; i < 10; i++) {
    let inserirNome = prompt(`Digite o ${i + 1}º nome: `)
    nomes.push(inserirNome)
}

let nomeProcurado = prompt('Digite o nome que você deseja encontrar: ')

if (nomes.includes(nomeProcurado)){
    console.log(`Achei o nome: ${nomeProcurado}`)
} else {
    console.log(`Não achei o nome: ${nomeProcurado}`)
}

