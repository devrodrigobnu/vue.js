// Desenvolver um programa para verificar a nota do aluno em 
// uma prova com 10 questões, o programa deve perguntar ao aluno 
// a resposta de cada questão e ao final comparar com o gabarito 
// da prova e assim calcular o total de acertos e a nota (atribuir 
// 1 ponto por resposta certa). Após cada aluno utilizar o sistema 
// deve ser feita uma pergunta se outro aluno vai utilizar o sistema. 
// Após todos os alunos terem respondido informar:
// Maior e Menor Acerto;
// Total de Alunos que utilizaram o sistema;
// A Média das Notas da Turma.
//  Gabarito da Prova:
 
// 01 - A
// 02 - B
// 03 - C
// 04 - D
// 05 - E
// 06 - E
// 07 - D
// 08 - C
// 09 - B
// 10 - A
// Após concluir isto você poderia incrementar o programa permitindo 
// que o professor digite o gabarito da prova antes dos alunos usarem o programa.

const prompt = require('prompt-sync')()

const gabarito = ['A', 'B', 'C', 'D', 'E', 'E', 'D', 'C', 'B', 'A']

let acertos = 0
let maiorAcerto = 0
let menorAcerto = 10
let totalAlunos = 0
let somaNotas = 0 
let respostasAluno = []

function verificarNota(){
    for (let i = 0; i < 10; i++){
        let resposta = prompt(`Questões ${i+1}: `).toUpperCase()
        respostasAluno.push(resposta)
    }
    for (let j = 0; j < 10; j++){
        if (respostasAluno[j] == gabarito[j]){
            acertos++
        }
    }

    if (acertos > maiorAcerto){
        maiorAcerto = acertos
    }
    if (acertos < menorAcerto){
        menorAcerto = acertos
    }
    
    totalAlunos++
    const nota = acertos
    somaNotas += nota
}

while (true) {
    verificarNota()

    const continuar = prompt('Outro aluno vai utilizar o sistema? (S/N): ').toUpperCase()
    if (continuar !== 'S') {
        break
    }
}

let mediaAlunos = somaNotas / totalAlunos

console.log(`Maior acerto: ${maiorAcerto}`)
console.log(`Menor acerto: ${menorAcerto}`)
console.log(`Total de alunos: ${totalAlunos}`)
console.log(`Média das notas da turma: ${mediaAlunos.toFixed(2)}`)