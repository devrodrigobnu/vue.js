// Criar um programa que permita o usuário
// entrar com o valor do raio de um círculo
// e calcule sua área.

function Main(user) {
    let raio = parseFloat(prompt('Digite o valor do raio em metros: '))
    let valor_pi = 3.1415
    let area = valor_pi * (raio * raio)

    console.log('A área do círculo equivale a: ' + area + ' m²,')
}

Main()