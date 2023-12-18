// Criar um site com um formulario que cadastre o endereco de um usuario
// Quando clicar no botao cadastrar, mostrar um confirm,
// caso o usuario clie sim, mostrar um alerta com os dados do formulário
// Utilizar o evento submit do formulario

function confirmarCadastro(){
    const rua = document.getElementById("rua").value;
    const bairro = document.getElementById("bairro").value;
    const numero = document.getElementById("numero").value;
    const cep = document.getElementById("cep").value;

    const resposta = confirm('Você tem certeza que deseja cadastrar?')

    if (resposta) {
        const mensagem = "Confirme os dados:\nRua: " + rua + "\nBairro: " + bairro + "\nNúmero: " + numero + "\nCEP: " + cep;
        alert(mensagem);
    } else {
        alert('Cadastro cancelado');
    }
}

document.getElementById('cadastroForm').addEventListener('submit', confirmarCadastro);