// 28.Faça um programa que calcule o valor total investido 
// por um colecionador em sua coleção de CDs e o valor médio gasto 
// em cada um deles. O usuário deverá informar a quantidade de CDs 
// e o valor para cada um.
const req = require('prompt-sync')
const prompt = req()

let qtdCds = Number(prompt('Informe a quantidade de cds: '))
let valorTotal = 0

for (let i = 0; i < qtdCds; i++){
    let valor = Number(prompt(`Informe o valor do ${i+1}º CD: `))
    valorTotal += valor
}

let valorMedio = valorTotal / qtdCds

console.log('O valor médio dos cds é: '+valorMedio)