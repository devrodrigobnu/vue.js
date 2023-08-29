const req = require('prompt-sync')
const prompt = req()

let senha = prompt('Digite sua senha: ');

while (senha !== '1234') {
    console.log('Senha incorreta');
    senha = prompt('Digite a senha novamente: ');
}

console.log('Bem-vindo ao sistema');
