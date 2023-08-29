// 22.	Faça um Programa que peça um número inteiro e determine se ele é par ou impar. Dica: utilize o operador módulo (resto da divisão).

function Main(num) {
    if (num % 2 == 0) {
        console.log(`O número ${num} é par!`)
    } else {
        console.log(`O número ${num} é impar!`)
    }
}

let num = Number(prompt('Digite um número: '))
Main(num)