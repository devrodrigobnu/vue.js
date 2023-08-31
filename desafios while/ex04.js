// Supondo que a população de um país A seja da ordem de 80000 habitantes 
// com uma taxa anual de crescimento de 3% e que a população de B seja 
// 200000 habitantes com uma taxa de crescimento de 1.5%. 
// Faça um programa que calcule e escreva o número de anos necessários para 
// que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.
const req = require('prompt-sync')
const prompt = req()

let cityA = 80000;
const growthRateA = 0.03;

let cityB = 200000;
const growthRateB = 0.015;

let years = 0;

while (cityA < cityB){
    cityA += cityA * growthRateA;
    cityB += cityB * growthRateB;
    years++;
}

console.log(`It will take ${years} years for the population of country A to surpass country B.`);
