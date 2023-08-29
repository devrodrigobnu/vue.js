const r = require('prompt-sync')
const prompt = r()

// Criar um sistema que verifique o ganhador de uma votacao com dois candidatos

function Main() {
    let votosCandidatoA = 200
    let votosCandadatoB = 180
    if (votosCandidatoA > votosCandadatoB) {
        console.log('Candidato A ganhou!')
    } else if (votosCandadatoB > votosCandidatoA) {
        console.log('Candidato B ganhou!')
    } else {
        console.log('A votação terminou em empate')
    }
}
Main()
