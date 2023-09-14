// Após concluir isto você poderia incrementar o programa permitindo 
// que o professor digite o gabarito da prova antes dos alunos usarem o programa.

const prompt = require('prompt-sync')()

const gabarito = []
let acertos = 0
let maiorAcerto = 0
let menorAcerto = 10
let totalAlunos = 0
let somaNotas = 0
let respostasAluno = []

for (i = 0; i < 10; i++) {
    gabarito[i] = prompt(`Digite a resposta ${i + 1}ª do GABARITO: `).toUpperCase()
}

function verificarNota() {
    for (let i = 0; i < 10; i++) {
        let resposta = prompt(`Questões ${i + 1}: `).toUpperCase()
        respostasAluno.push(resposta)
    }
    for (let j = 0; j < 10; j++) {
        if (respostasAluno[j] == gabarito[j]) {
            acertos++
        }
    }

    if (acertos > maiorAcerto) {
        maiorAcerto = acertos
    }
    if (acertos < menorAcerto) {
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