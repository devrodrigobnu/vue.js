// Faça um Programa que leia um número e exiba o dia correspondente da semana. 
// (1-Domingo, 2- Segunda, etc.), se digitar outro valor deve aparecer valor inválido.


function Main(user) {
    switch(user) {
        case '1':
            console.log('Dia correspondente: Domingo')
            break
        case '2':
            console.log('ia correspondente: Segunda-feira')
            break
        case '3':
            console.log('Dia correspondente: Terça-feira')
            break
        case '4':
            console.log('Dia correspondente: Quarta-feira')
            break
        case '5':
            console.log('Dia correspondente: Quinta-feira')
            break
        case '6':
            console.log('Dia correspondente: Sexta-feira')
            break
        case '7':
            console.log('Dia correspondente: Sabado')
            break
        default:
            console.log('Digite uma opção válida!')
    } 
}


let opcao_user = prompt('Que dia é hoje: \n1 - Domingo\n2 - Segunda-feira\n3 - Terça-feira\n4 - Quarta-feira\n5 - Sexta-feira\n6 - Sabado')
Main(opcao_user)