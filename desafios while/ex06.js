// Faça um programa que imprima na tela os números de 1 a 20, 
// um abaixo do outro. Depois modifique o programa para que ele mostre 
// os números um ao lado do outro.
const req = require('prompt-sync')
const prompt = req()

for (let i = 1; i <= 20; i++){
    console.log(i)
}

// ---------------------------------------------------------------

let list = []
for (let i = 0; i <= 20; i++){
    list[i] = i
}
console.log(list)


