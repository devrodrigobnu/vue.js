// 4.	Classe Carro:
// a.	Crie uma classe chamada Carro para modelar informações sobre um carro.
// b.	Atributos: Modelo, Cor, Ano, Velocidade Atual
// c.	Métodos: acelerar, frear e mostrarVelocidade.

// Created class "Car"
class Car {
    // Created the constructor
    constructor (model, color, year) {
        this.model = model;
        this.color = color;
        this.year = year;
        this.current_speed = 0;
    }
    
    showCar(){
        return [this.model, this.color, this.year, this.current_speed]
    }
    showSpeed(){
        return this.current_speed
    }

    accelerate(speed) {
        this.current_speed += speed
    }

    brake(speed) {
        if (speed <= this.current_speed) {
            this.current_speed -= speed;
            
        }
    }

}

// Tests
const new_car = new Car('C3', 'Black', 2014)

console.log(new_car.showCar())
new_car.accelerate(20)
