"use strict";
// 7) Crie uma função chamada verificarUsuario que aceite um objeto do tipo 
// Usuario e uma senha de entrada e verifique se a senha fornecida está correta. A
//  função deve retornar um booleano indicando se a senha está correta.
// Defina a função verificarUsuario
function verificarUsuario(usuario, senhaEntrada) {
    // Verifique se a senha fornecida é igual à senha armazenada no objeto de usuário
    return usuario.senha === senhaEntrada;
}
// Código rodando
const meuUsuario = {
    nome: "ExemploUsuario",
    senha: "senha123"
};
const senhaFornecida = "senha123";
const senhaCorreta = verificarUsuario(meuUsuario, senhaFornecida);
console.log("A senha fornecida está correta?", senhaCorreta);
