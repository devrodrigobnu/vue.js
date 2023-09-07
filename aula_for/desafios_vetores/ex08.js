// 8. Dados dois vetores de tamanho N, faça uma função 
// que diga se os mesmos possuam conteúdo igual.

const req = require('prompt-sync')
const prompt = req()


let vetorN1 = [1, 2, 3, 4 , 5]
let vetorN2 = [1, 2, 3, 4 , 5]


if (vetorN1 == vetorN2) {
    console.log('São iguais')
} else {
    console.log('Não são iguais')
}