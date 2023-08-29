// 1.Verifique se um número é positivo, negativo ou zero.

function Main(num) {
    if (num > 0) {
        console.log(`${num} é positivo`)
    } else if (num < 0) {
        console.log(`${num} é negativo`)
    } else
        console.log(`${num} é zero`)
}

let num = Number(prompt('Digite um número: '))
Main(num)