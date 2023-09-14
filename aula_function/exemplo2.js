const prompt = require("prompt-sync")()

function somar(n1,n2){
    return n1+n2
}
function subtrair(n1,n2){
    return n1-n2
}
function multiplicar(n1,n2){
    return n1*n2
}
function dividir(n1,n2){
    return n1/n2
}


let numero1 = Number(prompt('Digite um número: '))
let numero2 = Number(prompt('Digite um número: '))
let menu = prompt('1-Somar 2-Subtrair 3-Multiplicar 4-Dividr')
let resultado = 0

switch(menu){
    case '1': 
        resultado = somar(numero1, numero2)
        break
    case '2':
        resultado = subtrair(numero1, numero2)
        break
    case '3':
        resultado = multiplicar(numero1, numero2)
        break
    case '4': 
        resultado = dividir(numero1, numero2)
        break
}

console.log(resultado)