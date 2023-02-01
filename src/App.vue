<script>
import PokemonPage from './pages/PokemonPage.vue';
export default {
    components: {
        PokemonPage,
    },
};
</script>

<template>
    <PokemonPage />
</template>

<style scoped>
#app {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
