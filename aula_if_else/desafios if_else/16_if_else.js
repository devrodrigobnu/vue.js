// Faça um programa que calcule as raízes de uma equação do segundo grau, 
// na forma ax2 + bx + c. O programa deverá pedir os valores de a, b e c e fazer as 
// consistências, informando ao usuário nas seguintes situações:
// Se o usuário informar o valor de A igual a zero, a equação não é do segundo grau e 
// o programa não deve fazer pedir os demais valores, sendo encerrado;
// Se o delta calculado for negativo, a equação não possui raizes reais. Informe ao 
// usuário e encerre o programa;
// Se o delta calculado for igual a zero a equação possui apenas uma raiz real; informe-a 
// ao usuário;
// Se o delta for positivo, a equação possui duas raiz reais; informe-as ao usuário;


function CalculaEquacao(valor_a, valor_b, valor_c) {

    let delta = (valor_b * valor_b) - 4 * valor_a * valor_c
    console.log('O valor de delta é: ' + delta)

    if (valor_a == 0) {
        console.log('A equação não é de segundo grau, programa parou!')
    } else if (delta < 0) {
        console.log('A equação não possui raiz real.')
    } else if (delta == 0) {
        console.log('A equação possui apenas uma raiz real.')
    } else if (delta > 0) {
        console.log('A equação possui duas raizes reais.')
    }

}

let valor_a = parseFloat(prompt('Digite o valor de A: '))
let valor_b = parseFloat(prompt('Digite o valor de B: '))
let valor_c = parseFloat(prompt('Digite o valor de C: '))

CalculaEquacao(valor_a, valor_b, valor_c)