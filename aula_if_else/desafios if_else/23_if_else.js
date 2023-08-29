// Faça um Programa que peça um número e informe se o número
// é inteiro ou decimal. Dica: utilize uma função de arredondamento.

function Main(num) {
    if (num % 1 == 0) {
        console.log(`O número ${num} é inteiro`)
    } else {
        console.log(`O número ${num} é decimal`)
    }
}

let num = Number(prompt('Digite um número: '))
Main(num)