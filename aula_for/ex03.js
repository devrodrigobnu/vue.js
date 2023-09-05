// 3. Ler um vetor de 10 elementos. Crie um segundo vetor, com todos os
//  elementos na ordem inversa, ou seja, o último elemento passará a ser 
//  o primeiro, o penúltimo será o segundo e assim por diante. Imprima os 
//  dois vetores. 

const req = require('prompt-sync')
const prompt = req()

let lista_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let lista_2 = []
let k = 0

for (let i = 9; i >= 0; i--){
    lista_2[k] = lista_1[i]
    k++
}

console.log(lista_1)
console.log(lista_2)

