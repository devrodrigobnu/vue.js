// Classe Bola: Crie uma classe que modele uma bola:
// Atributos: Cor, circunferência, material
// Métodos: trocaCor e mostraCor

// Created class ball
class Ball {
    // Created the constructor 
    constructor(id, color, circumference, material) {
        this.id = id;
        this.color = color;
        this.circumference = circumference;
        this.material = material
    }

    // Created the methods and the attribute
    swapColor(newColor){
        this.color = newColor;
    }
    showColor(){
        return this.color;
    }
}

let color1 = new Ball(1, 'Green', 10, 'Plastic')
color1.swapColor('Red')
console.log(color1.showColor())






