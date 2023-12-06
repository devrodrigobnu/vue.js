class Person {
    constructor(name, height, weight){
        this.name = name;
        this.height = height;
        this.weight = weight;
    }
    // Função "dizer oi"
    sayHi(){
        console.log(this.name + ' disse oi');
    }
    calcularImc(){
        return this.weight / (this.height ** 2);
    }
}
let p1 = new Person('Sheila', 1.89, 85);
// Executa a função
p1.sayHi();
console.log(p1.calcularImc());



