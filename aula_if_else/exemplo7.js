const r = require('prompt-sync')
const prompt = r()

// Validação de senha e usuário

function Main(usuario, senha) {
    if (usuarioLocal == usuario && senhaLocal == senha) {
        console.log('Login efetuado com sucesso!')
    } else {
        console.log('Dados inválidos!')
    }

}
let usuarioLocal = 'admin'
let senhaLocal = '1234'
let usuario = prompt('Usuário: ')
let senha = prompt('Senha: ')
Main(usuario, senha)