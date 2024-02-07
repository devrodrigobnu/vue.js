// 4) Crie um type 'frutas', em seguida, Crie uma função 
// chamada imprimirFrutas que aceite um array de frutas e 
// imprima cada uma no console

type Fruits = {
    name: string;
    color: string;
}

function printFruits(fruits: Fruits[]): void {
    fruits.forEach(fruit => {
        console.log(`Name: ${fruit.name}, Color: ${fruit.color} `)
    })
}

const arrayOfFruits: Fruits[] = [
    { name: 'Maçã', color: 'Vermelha' },
    { name: 'Banana', color: 'Amarela' },
    { name: 'Uva', color: 'Roxa' }
]

printFruits(arrayOfFruits)

