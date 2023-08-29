// Faça um Programa que peça uma data no formato dd/mm/aaaa 
// e determine se a mesma é uma data válida.

function Main() {
    const regexData = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    let data = prompt('Digite um data no formato dd/mm/aaaa: ')

    if (regexData.test(data)) {
        console.log('Data válida.')
    } else {
        console.log('Data inválida.')
    }
}

Main()




console.log(/au/.test(prompt('Letra: ').toUpperCase())? 'vogal' : 'consoante')