// Criar um programa que permita o usuário
// entrar com o valor do altura e da base de um retângulo
// e calcule sua área.

function Main(user) {
    let altura = parseFloat(prompt('Digite o valor da altura do retângulo em metros: '))
    let base = parseFloat(prompt('Digite o valor da base do retângulo em metros: '))
    if (!isNaN(altura) && !isNaN(base) && altura > 0 && base > 0 ) {
        let area = base * altura
        console.log('A área do retângulo equivale a: ' + area + ' m²!')
    } else {
        console.log('Dados inválidos, insira números válidos!')
    }
}

Main()