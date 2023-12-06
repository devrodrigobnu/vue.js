// Classe Massa Corporal: 
// O IMC – Índice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. A fórmula é IMC = peso / (altura*2):
// Elabore uma classe que leia o peso e a altura de um adulto e mostre sua condição de acordo com a tabela abaixo.
// IMC em adultos Condição
// -Abaixo de 18,5 Abaixo do peso
// -Entre 18,5 e 25 Peso normal
// -Entre 25 e 30 Acima do peso
// -Acima de 30 obeso 


// Created IMC CLASS

class Imc {
    // Created the constructor and attributes
    constructor(weight, height) {
        this.weight = weight;
        this.height = height;
    }

    // Created methods
    returnData() {
        return [this.weight, this.height];
    }

    calculateImc(){
        const imc = this.weight / (this.height**2)

        if (imc < 18.5) {
            console.log(`Você está com IMC ${imc.toFixed(2)}, portanto está abaixo do peso`)
        } else if (imc >= 18.5 && imc < 25) {
            console.log(`Você está com IMC ${imc.toFixed(2)}, portanto está no peso normal`)
        } else if (imc >= 25 && imc < 30) {
            console.log(`Você está com IMC ${imc.toFixed(2)}, portanto está acima do peso`)
        } else {
            console.log(`Você está com IMC ${imc.toFixed(2)}, portanto está obeso`)
        }
 
    }

}

//  testing functions
let user1_imc = new Imc (54, 1.66)
user1_imc.returnData()
console.log(user1_imc.calculateImc())