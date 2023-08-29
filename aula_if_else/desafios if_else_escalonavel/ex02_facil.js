// Determine se um número é par ou ímpar.

function Main(num){
    if (num%2==0){
        console.log(`${num} é par!`)
    } else 
        console.log(`${num} é impar!`)
}

let num = Number(prompt('Digite um número: '))
Main(num)