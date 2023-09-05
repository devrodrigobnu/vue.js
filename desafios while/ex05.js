// Altere o programa anterior permitindo ao usuário 
// informar as populações e as taxas de crescimento iniciais. 
// Valide a entrada e permita repetir a operação.
const req = require('prompt-sync')
const prompt = req()


let city_a, city_b, rate_a, rate_b

while (isNaN(city_a) || isNaN(city_b)){
    city_a = Number(prompt('Enter the number of citizens in city A: '))
    city_b = Number(prompt('Enter the number of citizens in city B: '))

    if (isNaN(city_a) || isNaN(city_b)){
        console.log('Invalid input, please enter again: ')
    }
}


while (isNaN(rate_a) || isNaN(rate_b)){
    rate_a = Number(prompt('Please enter the annual growth rate of city A: '))
    rate_b = Number(prompt('Please enter the annual growth rate of city B: '))

    if (isNaN(rate_a) || isNaN(rate_b)){
        console.log('Invalid input, please enter again: ')
    }
}
let anos = 0

while (city_a < city_b){
    city_a += city_a * rate_a
    city_b += city_b * rate_b
    anos++
}

console.log(`It will take ${years} years for the population of city A to surpass or equal the population of city B..`);