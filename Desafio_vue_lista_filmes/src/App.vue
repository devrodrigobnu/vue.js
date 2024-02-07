<template>
  <div id="app">
    <header>
      <h1>Olá</h1>
    </header>

    <h1 id="titulo">Clique para Listar os filmes! ✌️</h1>
    <div class="btn-container">
      <button class="btn-listar-filmes" @click="exibirListarFilmes">Listar Filmes</button>
    </div>
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


.btn-listar-filmes{
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
  transition-duration: 0.4s;
}

.btn-listar-filmes:hover {
    background-color: #45a049
}
</style>
