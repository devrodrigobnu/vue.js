// Faça um programa que receba dois números inteiros e 
// gere os números inteiros que estão no intervalo compreendido por eles.
const req = require('prompt-sync')
const prompt = req()

const numero_1 = parseInt(prompt('Digite o primeiro número: '));
const numero_2 = parseInt(prompt('Digite o segundo número: '));

if (isNaN(numero_1) || isNaN(numero_2)) {
    console.log('Digite apenas números!');
} else {
    const menor = Math.min(numero_1, numero_2);
    const maior = Math.max(numero_1, numero_2);
    
    console.log(`Números no intervalo de ${menor} e ${maior}`);

    for (let i = menor; i <= maior; i++) {
        console.log(i);
    }
}

