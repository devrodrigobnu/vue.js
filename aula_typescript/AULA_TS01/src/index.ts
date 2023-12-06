// let n1: number = 1
// let n2: number = 1

// let soma: number = n1 + n2
// console.log(soma)

// inferencia 
// let nome = 'Jorge'

// anotação
// let nome2: string = 'Gorje'

// function mostraNome(nome:string) {
//     console.log(`Seu nome é:  ${nome}`)
// }
// mostraNome('Leiliana')

// function calcularAreaQuadrado(Lado:number) : number {
//     return Lado * Lado
// }
// console.log(calcularAreaQuadrado(20))



// Criar uma funcao que retorne o volume de um cilindro
// function calcularVolumeCilindro(raio:number, altura:number) : number {
//     return Math.PI * (raio**2) * altura
// }
// console.log(calcularVolumeCilindro(2,3))


// let teste : string | number | boolean;
// teste = 0
// teste = 'a'
// let isAdmin: boolean = true
// console.log(typeof isAdmin)
// let numeros: number[] = [1,2,3,4,5]
// console.log(numeros[1])


// const livro :{titulo: string; genero: string} = {
//     titulo: 'Pequeno Principe',
//     genero: 'Fantasia'
// }
// console.log(livro.genero)


// Criar o objeto filme, definir 5 propriedades para ele

type filme = {
    titulo: string;
    duracao: number;
    genero: string;
    classificacao: number;
    diretor: string
}

const filme1: filme = {
    titulo: 'Senhor dos anéis',
    duracao: 120,
    genero: 'Fantasia',
    classificacao: 12,
    diretor: 'Aquele moço'
}

console.log(filme1.diretor)





