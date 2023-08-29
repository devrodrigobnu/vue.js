// Faça um programa que lê as duas notas parciais obtidas por um aluno 
// numa disciplina ao longo de um semestre, e calcule a sua média. A atribuição 
// de conceitos obedece à tabela abaixo:
// Média de Aproveitamento  
// Conceito:
// Entre 9.0 e 10.0        A
// Entre 7.5 e 9.0         B
// Entre 6.0 e 7.5         C
// Entre 4.0 e 6.0         D
// Entre 4.0 e zero        E
// O algoritmo deve mostrar na tela as notas, a média, o conceito correspondente 
// e a mensagem “APROVADO” se o conceito for A, B ou C ou “REPROVADO” se o conceito for D ou E.


function CalculaMedia(nota1, nota2) {
    let media = (nota1+nota2)/2
    console.log('A média do aluno foi: ' + media)
    if (media >= 9 && media <= 10) {
        console.log('Aluno aprovado no conceito A.') 
    } else if (media >= 7.5 && media <= 9) {
        console.log('Aluno aprovado no conceito B.')
    } else if (media >= 6 && media <= 7.5) {
        console.log('Aluno aprovado no conceito C.') 
    } else if (media >= 4 && media <= 6) {
        console.log('ALuno reprovado no conceito D.')
    } else 
        console.log('Aluno reprovado no conceito E.')
}

let nota1 = parseFloat(prompt('Digite a primeira nota: '))
let nota2 = parseFloat(prompt('Digite a segunda nota: '))

CalculaMedia(nota1, nota2)