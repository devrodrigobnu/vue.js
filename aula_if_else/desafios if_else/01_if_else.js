// Faça um Programa que peça dois números e imprima o maior deles.

function EncontrarMaiorNumero(num1, num2) {
    if (num1 > num2) {
        console.log(num1 + ' é o maior número!')
    } else if (num2 > num1) {
        console.log(num2 + ' é o maior número!')
    } else {
        console.log('Os dois números são iguais!')
    }
}

let num1 = prompt('Digite o primeiro número: ')
let num2 = prompt('Digite o segundo número: ')

let MaiorNumero = EncontrarMaiorNumero(num1, num2)
