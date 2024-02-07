<template>
    <div>
        <h1>Lista de Filmes</h1>
        <Filmes :filmes="filmes" />
    </div>
</template>

<script>
import Filmes from './Filmes.vue'; 

export default {
    components: {
        Filmes 
    }
}
</script>


