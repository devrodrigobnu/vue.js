//  Faça um Programa para leitura de três notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
// 	A mensagem "Aprovado", se a média for maior ou igual a 7, com a respectiva média alcançada;
// 	A mensagem "Reprovado", se a média for menor do que 7, com a respectiva média alcançada;
// 	A mensagem "Aprovado com Distinção", se a média for igual a 10.

function Main(nota1, nota2, nota3){
    media = (nota1 + nota2 + nota3) / 3
    if (media >= 7 && media < 10) {
        console.log(`Aluno aprovado com média ${media}. Parabéns!`)
    } else if (media < 7) {
        console.log(`Aluno reprovado com média ${media}. Tente novamente!`)
    } else {
        console.log(`Aluno aprovado com distinção com a média ${media}. Parabéns!`)
    }
}

let nota1 = Number(prompt('Digite sua 1ª nota: '))
let nota2 = Number(prompt('Digite sua 2ª nota: '))
let nota3 = Number(prompt('Digite sua 3ª nota: '))
Main(nota1, nota2, nota3)