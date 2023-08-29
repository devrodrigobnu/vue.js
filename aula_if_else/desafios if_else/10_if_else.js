// Faça um Programa que pergunte em que turno você estuda. 
// Peça para digitar M-matutino ou V-Vespertino ou N- Noturno. 
// Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.

function Main(turno) {
    switch(turno) {
        case '1':
            console.log('Bom dia, ' + nome + '!')
            break
        case '2':
            console.log('Boa tarde! ' + nome + '!')
            break
        case '3':
            console.log('Boa noite! ' + nome + '!')
            break
        default:
            console.log('Valor inválido! ' + nome + '!')
    }
}
let nome = prompt('Informe o seu nome: ')
let user = prompt('Informe uma das opções:\n1-Matutino\n2-Vespertino\n3-Noturno')    
Main(user)