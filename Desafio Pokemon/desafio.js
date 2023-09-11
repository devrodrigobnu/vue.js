// Na competição Pokémon de apresentação, cada treinador recebe notas de sete juízes. 
// A melhor e a pior nota são eliminadas, e a nota final do treinador é calculada como 
// a média das notas restantes.
// Você deve criar um programa em JavaScript que permita a um treinador Pokémon inserir 
// seu nome e as notas atribuídas pelos sete juízes em sua apresentação. O programa calculará 
// a média final, e mostrará os resultados, conforme a descrição abaixo:
// ●	Solicite ao treinador Pokémon que insira seu nome.
// ●	Em seguida, permita que o treinador insira as notas atribuídas pelos sete juízes. 
// As notas não são informadas ordenadas.
// ●	Calcule a média final.


// Mostre o seguinte resultado:

// Exemplo de Saída:
// Treinador Pokémon: Ash Ketchum
// Nota do Jurado 1: 9.5
// Nota do Jurado 2: 8.0
// Nota do Jurado 3: 9.0
// Nota do Jurado 4: 8.5
// Nota do Jurado 5: 9.2
// Nota do Jurado 6: 8.8
// Nota do Jurado 7: 9.7

// Resultado final:
// Treinador Pokémon: Ash Ketchum
// Melhor nota: 9.7
// Pior nota: 8.0
// Média das notas: 9.07

const prompt = require('prompt-sync')()

let nome = prompt('Insira o nome do treinador Pokemon: ')
let listaNotas = []
let somaNotas = 0

for (let i = 0; i <= 6; i++){
    let numeroAleatorio = Math.random() * 10
    listaNotas.push(numeroAleatorio.toFixed(2))
    somaNotas += numeroAleatorio
}

let melhorNota = listaNotas[0]
let piorNota = listaNotas[0]

for (let i = 1; i <listaNotas.length; i++){
    if(listaNotas[i] > melhorNota){
        melhorNota = listaNotas[i]
    }
    if(listaNotas[i] < piorNota){
        piorNota = listaNotas[i]
    }
}

let media = somaNotas / listaNotas.length


for (let i = 0; i < listaNotas.length; i++){
    console.log(`Nota do jurado ${i + 1}: ${listaNotas[i]}`)
}
console.log(`Resultado final:`)
console.log(`Treinador Pokémon: ${nome}`)
console.log(`Melhor nota: ${melhorNota}`)
console.log(`Melhor nota: ${piorNota}`)
console.log(`Média das notas: ${media.toFixed(2)}`)











