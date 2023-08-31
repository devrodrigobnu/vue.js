// Faça um programa que leia um nome de usuário e a sua senha 
// e não aceite a senha igual ao nome do usuário, mostrando uma mensagem 
// de erro e voltando a pedir as informações.

const req = require('prompt-sync')
const prompt = req()



while (true) {
    let username = prompt('Enter your username: ');
    let password = prompt('Enter your password: ');

    if (password === username) {
        console.log('Password cannot be the same as the username!');
    } else {
        console.log('Password created successfully!');
        break;
    }
}
