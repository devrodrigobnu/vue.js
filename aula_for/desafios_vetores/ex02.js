// 2 Faça um programa para cadastrar 10 nomes. 
// Permita o usuário pesquisar um nome através do índice. 
// Ex: O Usuário digita o número 2, e programa mostra o nome 
// cadastrado no índice 2 do vetor.

const req = require('prompt-sync')
const prompt = req()

let lista = []

for (let i = 0; i < 10; i++){
    let nomes = prompt('Digite o nome: ')
    lista.push(nomes)
}

let indice = Number(prompt('Insira o número do índice para verificar o nome: '))

if (indice >= 0 && indice < lista.length){
    console.log(`O nome inserido na posição ${indice} é: ${lista[indice]}`)
} else{
    console.log('Insira um número válido.')
}

