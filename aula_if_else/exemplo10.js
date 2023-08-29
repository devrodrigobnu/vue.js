const r = require('prompt-sync')
const prompt = r()

// Criar um programa que peça ao usuário um número de 1 a 5
// e escrev-o por extenso.


function Main(chosenNumber) {
    switch (chosenNumber) {
        case 1:
            console.log('Forma extensa: Um')
            break
        case 2:
            console.log('Forma extensa: Dois')
            break
        case 3:
            console.log('Forma extensa: Três')
            break
        case 4:
            console.log('Forma extensa: Quatro')
            break
        case 5:
            console.log('Forma extensa: Cinco')
            break
        default:
            console.log('Entrada inválida!')
            break
    }

}

let num = Number(prompt('Digite um número entre 1 e 5: '))
Main(num)












// function Main(num) {
//     if (num == 1) {
//         console.log('Forma extensa: Um')
//     } else if (num == 2) {
//         console.log('Forma extensa: Dois')
//     } else if (num == 3) {
//         console.log('Forma extensa: Três')
//     } else if (num == 4) {
//         console.log('Forma extensa: Quatro')
//     } else if (num == 5) {
//         console.log('Forma extensa: Cinco')
//     } else
//         console.log('Entrada inválida')
// }

// let num = Number('Digite um número de 1 a 5: ')
// Main(num)