// 1. Faça um programa que lê 10 números inteiros do 
// teclado e armazene em um vetor. Ao final imprima o 
// vetor armazenado

const req = require('prompt-sync')
const prompt = req()


for (let i = 0; i < 10; i++) {
    let nota = Number(prompt('Digite uma nota: '))
    lista.push(nota)
}
console.log(lista)