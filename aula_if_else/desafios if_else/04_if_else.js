// Faça um Programa que verifique se uma letra digitada é vogal ou consoante.

function Main(letra_digitada) {
    switch(letra_digitada) {
        case 'A':
        case 'a':
            console.log(`A letra ${letra_digitada} é uma vogal!`)
            break
        case 'E':
        case 'e':
            console.log(`A letra ${letra_digitada} é uma vogal!`)
            break
        case 'I':
        case 'i':
            console.log(`A letra ${letra_digitada} é uma vogal!`)
            break
        case 'O':
        case 'o':
            console.log(`A letra ${letra_digitada} é uma vogal!`)
        case 'U':
        case 'u':
            console.log(`A letra ${letra_digitada} é uma vogal!`)
            break
        default:
            console.log(`A letra ${letra_digitada} é uma consoante!`)
            
    }
}

let user = prompt('Digite uma letra para verificar se é uma vogal ou uma consoante: ')
Main(user)


console.log(/au/.test(prompt('Letra: ').toUpperCase())? 'vogal' : 'consoante')