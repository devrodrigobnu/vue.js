// // 6. Classe Produto: 
// a. Crie uma classe chamada Produto para modelar informações sobre um produto. 
// b. Atributos: Nome, Preço, Quantidade em Estoque. 
// c. Métodos: atualizarEstoque (para adicionar ou remover produtos do estoque) e calcularTotal (para calcular o valor total do estoque).


class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.quantity_stock = 0;
    }

    addProduct(quantity){
        return this.quantity_stock += quantity
    }

    removeProduct(quantity){
        return this.quantity_stock -= quantity
    }

    calcularTotal(){
        return this.quantity_stock * this.price
    }
}

const p1 = new Product('camiseta', 25)

p1.addProduct(1000)
console.log(p1.quantity_stock)
p1.removeProduct(250)
console.log(p1.quantity_stock)
console.log(p1.calcularTotal())

