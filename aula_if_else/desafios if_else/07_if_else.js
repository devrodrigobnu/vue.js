// Faça um Programa que leia três números e mostre o maior e o menor deles.

function Main(num1, num2, num3) {
    let maior = Math.max(num1, num2, num3)
    let menor = Math.min(num1, num2, num3)

    console.log('O menor número informado é: ' + menor);
    console.log('O maior número informado é: ' + maior);
}

let num1 = parseFloat(prompt('Informe o primeiro número: '))
let num2 = parseFloat(prompt('Informe o segundo número: '))
let num3 = parseFloat(prompt('Informe o terceiro número: '))    

Main(num1, num2, num3)