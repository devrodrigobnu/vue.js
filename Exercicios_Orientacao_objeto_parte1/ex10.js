// 3.	Classe Conta Bancária:
// a.	Crie uma classe chamada ContaBancaria para modelar uma conta bancária.
// b.	Atributos: Titular, Saldo, Número da Conta
// c.	Métodos: depositar, sacar e mostrarSaldo.

// Created class
class ContaBancaria {
    constructor(titular, numeroDaConta) {
        this.titular = titular;
        this.saldo = 0;
        this.numeroDaConta = numeroDaConta;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    sacar(valor) {
        if (valor > this.saldo) {
            return false;
        } else {
            this.saldo -= valor;
            return true;
        }
    }

    mostrarSaldo() {
        return this.saldo;
    }
}

let nome = prompt('NOME: ');
let conta = Number(prompt('NUMERO DA CONTA: '));
let cb = new ContaBancaria(nome, conta);

while (true) {
    alert(`Bem vindo(a), ${cb.titular}`);

    let menu = prompt('1-Depositar\n2-Sacar\n3-Ver saldo\n4-Sair');
    let valor = 0;

    switch (menu) {
        case '1':
            valor = Number(prompt('Digite o valor a ser depositado: '));
            if (confirm(`Confirmar depósito de R$${valor}`)) {
                cb.depositar(valor);
                alert('Depósito efetuado com sucesso.');
            } else {
                alert('Depósito cancelado');
            }
            break;
        case '2':
            valor = Number(prompt(`Saldo atual: R$${cb.mostrarSaldo()}\nDigite o valor a ser sacado: `));
            if (cb.sacar(valor)) {
                alert(`Saque de R$${valor} efetuado com sucesso!`);
            } else {
                alert('Saldo insuficiente. Saque cancelado.');
            }
            break;
        case '3':
            alert(`SALDO ATUAL: R$${cb.mostrarSaldo()}`);
            break;
        case '4':
            alert('Saindo...');
            break;
        default:
            alert('Entrada inválida');
            break;
    }

    if (menu === '4') {
        break;
    }
}

