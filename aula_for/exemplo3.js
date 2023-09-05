// Criar um sistema que permita o usuário salvar 6 notas em um vetor
const req = require('prompt-sync')
const prompt = req()

let lista = []

for (let i = 0; i < 6; i++) {
    let nota = Number(prompt('Digite uma nota: '))
    lista.push(nota)
}
console.log(lista)




