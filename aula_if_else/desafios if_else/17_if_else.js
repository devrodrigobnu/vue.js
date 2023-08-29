// Faça um Programa que peça um número correspondente a um 
// determinado ano e em seguida informe se este ano é ou não bissexto.

function Main(ano) {
    if (ano%4==0 && ano%100!=0 || ano%400==0) {
        console.log(`O ano ${ano} é bissexto.`)
    } else 
    console.log(`O ano ${ano} não é bissexto.`)
}       

let ano = parseInt(prompt('Digite um ano: '))
Main(ano)