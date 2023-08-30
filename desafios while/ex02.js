// Faça um programa que leia um nome de usuário e a sua senha 
// e não aceite a senha igual ao nome do usuário, mostrando uma mensagem 
// de erro e voltando a pedir as informações.

const req = require('prompt-sync')
const prompt = req()



while (true){
    let usuario = prompt('Digite o nome de usuário: ')
    let senha = prompt('Digite sua senha: ')

    if(senha === usuario) {
        console.log('Senha não pode ser igual usuario!')
    } else {
        console.log('Senha criada com sucesso!')
        break
    }
    
}