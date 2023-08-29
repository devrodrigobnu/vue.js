// Faça um Programa que peça os 3 lados de um triângulo. O programa deverá informar se os valores 
// podem ser um triângulo. Indique, caso os lados formem um triângulo, se o mesmo é: equilátero, isósceles ou escaleno.
// Dicas:
// Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro;
// Triângulo Equilátero: três lados iguais;
// Triângulo Isósceles: quaisquer dois lados iguais;
// Triângulo Escaleno: três lados diferentes;


function CalculaTriangulo(lado1, lado2, lado3) {
    if (lado1 == lado2 && lado1 == lado3 && lado2 == lado3) {
        console.log('Triângulo do tipo Equilátero.')
    } else if (lado1 == lado2 && lado1 != lado3 && lado2 != lado3) {
        console.log('Triângulo do tipo Isóceles.')
    } else 
        console.log('Triângulo do tipo Escaleno.')
}

let lado1 = parseFloat(prompt('Digite o tamanho do primeiro lado do triângulo: '))
let lado2 = parseFloat(prompt('Digite o tamanho do segundo lado do triângulo: '))
let lado3 = parseFloat(prompt('Digite o tamanho do terceiro lado do triângulo: '))

CalculaTriangulo(lado1, lado2, lado3)