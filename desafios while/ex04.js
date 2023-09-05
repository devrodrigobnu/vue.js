// Supondo que a população de um país A seja da ordem de 80000 habitantes 
// com uma taxa anual de crescimento de 3% e que a população de B seja 
// 200000 habitantes com uma taxa de crescimento de 1.5%. 
// Faça um programa que calcule e escreva o número de anos necessários para 
// que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.

let city_a = 80000
let city_b = 200000

rate_a = 0.03
rate_b = 0.015

years = 0

while(city_a < city_b){
    city_a += city_a * rate_a
    city_b += city_b * rate_b
    years++

}
console.log(`It will take ${years} until city A reaches the population of city B.`)