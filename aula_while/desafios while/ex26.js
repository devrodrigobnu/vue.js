// 26.	Numa eleição existem três candidatos. Faça um programa que 
// peça o número total de eleitores. Peça para cada eleitor votar 
// e ao final mostrar o número de votos de cada candidato.

const req = require('prompt-sync')
const prompt = req()


let votosCandidato1 = 0
let votosCandidato2 = 0
let votosCandidato3 = 0

let qtdEleitores = Number(prompt('Quantos eleitores irão participar da eleição: '))

for (let i = 0; i < qtdEleitores; i++){
    let voto = 0
    while(true){
        voto = Number(prompt('1-Candidato01 2-Candidato02 3-Candidato03: '))
        if (voto <= 3) break
    }
    
    switch(voto){
        case 1:
            votosCandidato1++
            break;
        case 2:
            votosCandidato2++
            break;
        case 3:
            votosCandidato3++
            break;
    }
}

console.log('Total de votos')
console.log('Candidato 1: '+ votosCandidato1)
console.log('Candidato 2: '+ votosCandidato2)
console.log('Candidato 3: '+ votosCandidato3)