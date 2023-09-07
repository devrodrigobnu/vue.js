// Calcule a média de três notas e classifique o aluno como "A", "B", "C" ou "D" com base na média.

function Main(nota_1, nota_2, nota_3) {
    media = (nota_1 + nota_2 + nota_3) / 3
    if (media == 10) {
        console.log(`A média foi: ${media} -> Aluno A`)
    } else if (media >= 7 && media < 10) {
        console.log(`A média foi: ${media} -> Aluno B`)
    } else if (media >= 4 && media < 7) {
        console.log(`A média foi: ${media} -> Aluno C`)
    } else
        console.log(`A média foi: ${media} -> Aluno D`)
}

let nota_1 = parseFloat(prompt('Digite a primeira nota: '))
let nota_2 = parseFloat(prompt('Digite a segunda nota: '))
let nota_3 = parseFloat(prompt('Digite a terceira nota: '))

Main(nota_1, nota_2, nota_3)