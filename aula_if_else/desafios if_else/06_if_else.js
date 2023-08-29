// Faça um Programa que leia três números e mostre o maior deles.

function Main(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log('O maior número informado é: ' + num1 )
    } else if (num2 > num1 && num2 > num3) {
        console.log('O maior número informado é: ' + num2)
    } else {
        console.log('O maior número informado é: ' + num3)
    }
}

let num1 = Number(prompt('Digite o primeiro número: '))
let num2 = Number(prompt('Digite o segundo número: '))
let num3 = Number(prompt('Digite o terceiro número: '))
Main(num1, num2, num3)
