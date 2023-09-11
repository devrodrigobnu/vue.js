// 33.	O Departamento Estadual de Meteorologia lhe contratou 
// para desenvolver um programa que leia um conjunto indeterminado 
// de temperaturas, e informe ao final a menor e a maior temperaturas
//  informadas, bem como a média das temperaturas.
const req = require('prompt-sync')
const prompt = req()

console.log('DEPARTAMENTO ESTADUAL DE METEOROLOGIA')

let menorTemperatura = Infinity
let maiorTemperatura = -Infinity
let somaTemperaturas = 0
let contador = 0 

while (true){
    let temperatura = Number(prompt(`Informe a temperatura ou 0 para parar: `))

    if (temperatura === 0){
        break
    }
    somaTemperaturas += temperatura


    if (temperatura < menorTemperatura){
        menorTemperatura = temperatura;
    }
    if (temperatura > maiorTemperatura){
        maiorTemperatura = temperatura;
    }
    contador++
}

if (contador === 0){
    console.log('Nenhuma temperatura foi informada.')
} else {
    let mediaTemperaturas = somaTemperaturas / contador
    console.log(`Menor temperatura: ${menorTemperatura}`)
    console.log(`Maior temperatura: ${maiorTemperatura}`)
    console.log(`Média de temperatura: ${mediaTemperaturas.toFixed(2)}`)
}