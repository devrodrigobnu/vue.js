<template>
    <!-- Define a estrutura HTML do componente -->
    <div>
        <!-- Título da lista de filmes -->
        <h1>Lista de Filmes</h1>
        <!-- Componente Filmes para exibir a lista de filmes -->
        <Filmes :filmes="filmes" />
    </div>
</template>

<script>
import Filmes from './Filmes.vue'; // Importa o componente Filmes

export default {
    components: {
        Filmes // Registro do componente Filmes para uso no template
    }
}
</script>
