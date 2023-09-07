// Faça um programa que peça ao usuário para digitar uma 
// senha e continue pedindo a senha até que ela seja "1234".
const req = require('prompt-sync')
const prompt = req


let senha = prompt('Digite sua senha: ')
while (senha != '1234'){
    console.log('Senha incorreta')
    senha = prompt('Digite a senha novamente: ')

}

console.log('Bem vindo ao sistema')