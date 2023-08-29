// Faça um Programa que peça um valor e mostre na tela se 
// o valor é positivo ou negativo.

function result(num1) {
    if (num1 >= 0) {
        console.log(num1 + ' é um número positivo!')
    } else {
        console.log('O número é negativo!')
    }
}

var num1 = prompt('Digite um número qualquer: ')

var valor_num = result(num1)