// Faça um Programa que verifique se uma letra digitada é "F" ou "M" ou “O”. 
// Conforme a letra escrever: F - Feminino, M - Masculino, O - Outro.

function Main(sex) {
    switch (sex) {
        case 'F':
            console.log('O usuário é do sexo feminino!')
            break
        case 'M':
            console.log('O usuário é do sexo masculino!')
            break
        case 'O':
            console.log('O - Outro')
        default:
            console.log('Sexo não reconhecido')
    }
}

var user = prompt('Digite o sexo do usuário (F, M ou O): ')
Main(user)