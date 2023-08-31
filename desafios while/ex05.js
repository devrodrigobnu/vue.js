// Altere o programa anterior permitindo ao usuário 
// informar as populações e as taxas de crescimento iniciais. 
// Valide a entrada e permita repetir a operação.
const req = require('prompt-sync')
const prompt = req()


let cityA, cityB, growthRateA, growthRateB;

while (isNaN(cityA) || isNaN(cityB)){
    cityA = Number(prompt('Enter the population of city A: '));
    cityB = Number(prompt('Enter the population of city B: '));

    if (isNaN(cityA) || isNaN(cityB)){
        console.log('Invalid input, please enter again: ');
    }
}

while (isNaN(growthRateA) || isNaN(growthRateB)){
    growthRateA = Number(prompt('Enter the annual growth rate of city A: '));
    growthRateB = Number(prompt('Enter the annual growth rate of city B: '));

    if (isNaN(growthRateA) || isNaN(growthRateB)){
        console.log('Invalid input, please enter again: ');
    }
}

let years = 0;

while (cityA < cityB){
    cityA += cityA * growthRateA;
    cityB += cityB * growthRateB;
    years++;
}

console.log(`It will take ${years} years for the population of city A to surpass or equal the population of city B.`);

