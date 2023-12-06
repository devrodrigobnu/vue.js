// Classe Triângulo:
// Crie uma classe chamada Triangulo que modele um triângulo.
// Atributos: LadoA, LadoB, LadoC
// Métodos: mudarLados, retornarLados, calcularArea e verificarTriangulo (para verificar se é um triângulo válido).

// Crie uma classe chamada Triangulo 
class Triangle {
    // Atributos 
    constructor(side_a,side_b,side_c) {
        this.side_a = side_a
        this.side_b = side_b
        this.side_c = side_c
    }
    // Métodos
    changeSides (newSide_a, newSide_b, newSide_c) {
        this.newSide_a = newSide_a
        this.newSide_b = newSide_b
        this.newSide_c = newSide_c
    }

    returnSides() {
        return [this.side_a, this.side_b, this.side_c]
    }

    calculateArea() {
        const semiPerimeter = (this.side_a + this.side_b + this.side_c) / 2
        const area = Math.sqrt (semiPerimeter * (semiPerimeter - this.side_a) * (semiPerimeter - this.side_b) * (semiPerimeter - this.side_c))
        return area 
    }
    
    isValidTriangle() {
        return (this.side_a + this.side_b > this.side_c) && (this.side_b + this.side_c > this.side_a) && (this.side_a + this.side_c > this.side_b)
    }
}

// Using the methods 
const triangle = new Triangle(5 ,7 , 8)

console.log('The sides of the triangle are:' + triangle.returnSides())
console.log('The area of the triangle is: ' + triangle.calculateArea().toFixed(2))
console.log('Is the triangle valid? ' + triangle.isValidTriangle());














