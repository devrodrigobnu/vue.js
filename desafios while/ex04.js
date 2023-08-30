// Supondo que a população de um país A seja da ordem de 80000 habitantes 
// com uma taxa anual de crescimento de 3% e que a população de B seja 
// 200000 habitantes com uma taxa de crescimento de 1.5%. 
// Faça um programa que calcule e escreva o número de anos necessários para 
// que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.
const req = require('prompt-sync')
const prompt = req()

let cidadeA = 80000
const taxaCrescimentoA = 0.03

let cidadeB = 200000
const taxaCrescimentoB = 0.015

let anos = 0

while (cidadeA < cidadeB){
    cidadeA += cidadeA * taxaCrescimentoA
    cidadeB += cidadeB * taxaCrescimentoB
    anos++
}

console.log(`Levará ${anos} anos para a população do pais A ultrapassar o país B`)