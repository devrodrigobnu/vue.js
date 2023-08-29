// Determine se um ano é bissexto ou não.

function Main(ano) {
    if (ano%4==0 && ano%100!==0 || ano%400==0) {
        console.log(`O ano ${ano} é bissexto!`)
    } else
        console.log(`O ano ${ano} não é bissexto!`)
}

let ano = Number(prompt('Digite o ano: '))
Main(ano)