// 5.	Classe Animal:
// a.	Crie uma classe chamada Animal para modelar informações sobre um animal.
// b.	Atributos: Nome, Espécie, Idade
// c.	Métodos: emitirSom para representar o som que o animal faz e Envelhecer.



class Animal {
    constructor(nome, especie, idade) {
        this.nome = nome;
        this.especie = especie;
        this.idade = idade;
    }

    emitirSom() {
        let sons = ['miau miau', 'miaaaaaaaaaau', 'prrrr miau'];
        let index = Math.round(Math.random() * (sons.length - 1));
        console.log(index);
        alert(sons[index]); // Use console.log instead of alert
    }

    envelhecer() {
        this.idade += 1;
    }
}

let a1 = new Animal('gato', 'felino', 33);
a1.emitirSom();
