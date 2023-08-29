// Desafio: Criar um programa que permita o usuario
// entrar com os valores a,b,c de uma equação do segundo
// grau e:
// a)Calcule o delta (delta = (b²) - 4 *a*c)
// c)Calcular o valor de x'

function Main(a, b, c) {

    let delta = (b * b) - 4 * a * c
    console.log('O valor de delta é ' + delta)

    let x1 = (-b + Math.sqrt(delta)) / (2 * a)
    let x2 = (-b - Math.sqrt(delta)) / (2 * a)
    console.log(`x1 = ${x1}`)
    console.log(`x2 = ${x2}`)
    
}


let a = parseFloat(prompt('Digite o valor de A: '))
let b = parseFloat(prompt('Digite o valor de B: '))
let c = parseFloat(prompt('Digite o valor de C: '))

Main(a, b, c)