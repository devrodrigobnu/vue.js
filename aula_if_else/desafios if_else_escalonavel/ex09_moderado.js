// Determine se um triângulo é equilátero, isósceles ou escaleno.

function Main(lado_1, lado_2, lado_3) {
    if (lado_1 == lado_2 && lado_1 == lado_3) {
        console.log('O Triângulo é do tipo equilátero!')
    } else if (lado_1 == lado_2 && lado_1 != lado_3 && lado_2 != lado_3){
        console.log('O triângulo é do tipo isósceles!')
    } else {
        console.log('O triângulo é do tipo escaleno!')
    }
}

let lado_1 = parseFloat(prompt('Digite o tamanho do lado "1" '))
let lado_2 = parseFloat(prompt('Digite o tamanho do lado "2" '))
let lado_3 = parseFloat(prompt('Digite o tamanho do lado "3" '))

Main(lado_1, lado_2, lado_3)
