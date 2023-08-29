// Criar um programa que permita o usuário
// entrar com o valor do lado de um quadrado
// e calcule sua área.

function Main(user) {
    let lado1 = parseFloat(prompt('Digite um valor válido em metros: '))
    if (!isNaN(lado1) && lado1 > 0) {
        let area = lado1 * lado1
        console.log('A área do quadrado equivale a: ' + area + ' m²')
    } else {
        console.log('Dados inválidos, insira números válidos!')
    }
}

Main()