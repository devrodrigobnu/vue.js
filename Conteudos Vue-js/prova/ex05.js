// 5 - Peça ao usuário para inserir uma senha. Se a senha inserida for correta, 
// exiba uma mensagem de boas-vindas; caso contrário, solicite que eles tentem novamente.

const req = require('prompt-sync')
const prompt = req()

function Main() {
    const senhaOk = '1234'

    while (true) {
        const senhaUsuario = req('Digite a senha: ')

        if (senhaUsuario === senhaOk) {
            console.log('Bem-vindo, acesso liberado!')
            break;
        } else {
            console.log('Senha incorreta, tente novamente: ')
        }
    }
}

Main()
