
// 7) Crie uma função chamada verificarUsuario que aceite um objeto do tipo 
// Usuario e uma senha de entrada e verifique se a senha fornecida está correta. A
//  função deve retornar um booleano indicando se a senha está correta.


// Defina a interface Usuario
interface Usuario {
    nome: string;
    senha: string;
    // Outras propriedades do usuário, se houver
  }
  
  // Defina a função verificarUsuario
  function verificarUsuario(usuario: Usuario, senhaEntrada: string): boolean {
    // Verifique se a senha fornecida é igual à senha armazenada no objeto de usuário
    return usuario.senha === senhaEntrada;
  }
  
  // Código rodando
  const meuUsuario: Usuario = {
    nome: "ExemploUsuario",
    senha: "senha123"
  };
  
  const senhaFornecida: string = "senha123";
  const senhaCorreta: boolean = verificarUsuario(meuUsuario, senhaFornecida);
  
  console.log("A senha fornecida está correta?", senhaCorreta);
  