// Decida se um aluno foi aprovado (nota maior ou igual a 60) ou reprovado.

function Main(nota1, nota2) {
    media = (nota1 + nota2) / 2  
    if (media >= 60) {
        console.log(`Aluno teve média ${media} e foi aprovado!`)
    } else 
        console.log(`Aluno teve média ${media} e foi reprovado!`)
}

let nota1 = Number(prompt('Digite a primeira nota: '))
let nota2 = Number(prompt('Digite a segunda nota: '))
Main(nota1, nota2)