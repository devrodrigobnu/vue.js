// Classe Quadrado: Crie uma classe que modele um quadrado:
// Atributos: Tamanho do lado
// Métodos: Mudar valor do Lado, Retornar valor do Lado e calcular Área;

// Created class Square
class Square {

    // Created the constructor and the attribute
    constructor(size) {
        this.size = size;
    }
    
    // Created the methods
    swapSize(newSize){
        this.size = newSize;
    }
    returnSize(){
        return this.size;
    }
    calculateArea(){
        return this.size * this.size;
    }
}
let area1 = new Square(10)
area1.swapSize(20)
console.log(area1.returnSize())
console.log(area1.calculateArea())
