// Faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
// "Telefonou para a vítima?"
// "Esteve no local do crime?"
// "Mora perto da vítima?"
// "Devia para a vítima?"
// "Já trabalhou com a vítima?" O programa deve no final emitir uma classificação sobre a participação 
// da pessoa no crime. Se a pessoa responder positivamente a 2 questões ela deve ser classificada como 
// "Suspeita", entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente".

let contadorDeRespostas

console.log('Digite 1-SIM 2-NÃO')
console.log('------------------')
let respostas = prompt('Telefonou para a vítima?')
    if (respostas == '1'){
        contadorDeRespostas++
    }
respostas = prompt('Esteve no local do crime?')
    if (respostas == '1'){
        contadorDeRespostas++
    }

respostas = prompt('Mora perto da vítima?')
    if (respostas == '1'){
        contadorDeRespostas++
    }

respostas = prompt('Devia para a vítima?')
    if (respostas == '1'){
        contadorDeRespostas++
    }

respostas= prompt('Já trabalhou com a vítima?')
    if (respostas == '1'){
        contadorDeRespostas++
    }

if (contadorDeRespostas == 0){
    console.log('INOCENTE')
} else if (contadorDeRespostas == 2){
    console.log('SUSPEITO')
} else if(contadorDeRespostas < 5) {
    console.log('CÚMPLICE')
} else
    console.log('ASSASSINO')