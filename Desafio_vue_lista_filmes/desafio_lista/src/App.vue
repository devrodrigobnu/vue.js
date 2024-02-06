<template>
  <!-- Define a estrutura HTML do componente -->
  <div id="app">
    <header>
      <!-- Cabeçalho do aplicativo -->
      <h1>Olá</h1>
    </header>
    <!-- Título principal do aplicativo -->
    <h1 id="titulo">Clique para Listar os filmes! ✌️</h1>
    <div class="btn-container">
      <!-- Botão que ao ser clicado chama o método exibirListarFilmes -->
      <button @click="exibirListarFilmes">Listar Filmes</button>
    </div>
    <!-- Componente ListarFilmes, só é renderizado se exibirFilmes for verdadeiro -->
    <ListarFilmes v-if="exibirFilmes" />
  </div>
</template>

<script>
import ListarFilmes from './components/ListarFilmes.vue';

export default {
  components: {
    // Registro do componente ListarFilmes para uso no template
    ListarFilmes
  },
  data() {
    return {
      // Variável que controla a exibição do componente ListarFilmes
      exibirFilmes: false
    }
  },
  methods: {
    // Método que alterna o valor de exibirFilmes entre verdadeiro e falso
    exibirListarFilmes() {
      this.exibirFilmes = !this.exibirFilmes;
    }
  }
}
</script>

<style>
/* Estilos para o corpo do documento e o componente #app */
body,
#app {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

/* Estilos para o título principal */
#titulo {
  font-size: 24px;
  text-align: center;
}

/* Estilos para o container do botão */
.btn-container {
  margin-top: 20px;
  display: flex;
}

/* Estilos para o botão */
.btn-container button {
  margin-right: 10px;
}

/* Estilos para um botão específico (não utilizado no exemplo fornecido) */
.botao-cadastrar {
  margin-top: 15px;
}
</style>
