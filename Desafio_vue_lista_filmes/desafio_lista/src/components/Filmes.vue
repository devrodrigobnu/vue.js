<template>
    <!-- Define a estrutura HTML do componente -->
    <div>
        <ul>
            <!-- Itera sobre a lista de filmes e exibe cada filme com seu título e gênero -->
            <li v-for="filme in filmes" :key="filme.id">
                {{ filme.titulo }} - {{ filme.genero }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // Lista de filmes com seus títulos e gêneros
            filmes: [
                { id: 1, titulo: 'Vingadores: Ultimato', genero: 'Ação' },
                { id: 2, titulo: 'A Origem', genero: 'Ficção Científica' },
                { id: 3, titulo: 'O Senhor dos Anéis: O Retorno do Rei', genero: 'Fantasia' },
                { id: 4, titulo: 'Titanic', genero: 'Romance' },
                { id: 5, titulo: 'Pulp Fiction', genero: 'Crime' },
                { id: 6, titulo: 'Matrix', genero: 'Ficção Científica' },
                { id: 7, titulo: 'Forrest Gump', genero: 'Drama' },
                { id: 8, titulo: 'Jurassic Park', genero: 'Aventura' },
                { id: 9, titulo: 'O Poderoso Chefão', genero: 'Crime' },
                { id: 10, titulo: 'Interestelar', genero: 'Ficção Científica' }
            ]
        };
    }
};
</script>
