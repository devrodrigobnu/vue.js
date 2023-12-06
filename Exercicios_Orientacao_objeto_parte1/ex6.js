// Classe Retangulo: Crie uma classe que modele um retangulo:
// Atributos: LadoA, LadoB (ou Comprimento e Largura, ou Base e Altura, a escolher)
// Métodos: Mudar valor dos lados, Retornar valor dos lados, calcular Área e calcular Perímetro;
// Crie um programa que utilize esta classe. Ele deve pedir ao usuário que informe as medidas de um local. Depois, deve criar um objeto com as medidas e calcular a quantidade de pisos e de rodapés necessárias para o local.

// Created Rectangle class
class Rectangle {

    // Created the constructor and attributes
    constructor(sizeA, sizeB) {
        this.sizeA = sizeA;
        this.sizeB = sizeB;  
    }

    // Created methods
    changeSizes(newSizeA, newSizeB) {
        this.sizeA = newSizeA;
        this.sizeB = newSizeB;
    }

    returnSides() {
        return [this.sizeA, this.sizeB];
    }

    calculateArea() {
        return this.sizeA * this.sizeB;
    }

    calculatePerimeter() {
        return 2 * (this.sizeA + this.sizeB);
    }
}

// testing functions
let rectangle1 = new Rectangle(2,4)
rectangle1.changeSizes(4,8)
console.log(rectangle1.returnSides())
console.log(rectangle1.calculateArea())
console.log(rectangle1.calculatePerimeter())