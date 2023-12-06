// Criar a classe circulo com o atributo raio
// Criar o método calcular Area que retorna o valor
// da area

class Circle {
    constructor(radius){
        this.radius = radius;
    }
    calculateArea(){
        return this.radius**2 * Math.PI;
    }
}

let c1 = new Circle(55) 
console.log(c1.calculateArea())