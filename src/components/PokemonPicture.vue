<template>
    <div class="pokemon-container">
        <img :src="imgSrc" alt="pokemon" class="hidden-pokemon" />
        <img v-if="showPokemon" :src="imgSrc" alt="pokemon" class="fade-in" />
    </div>
</template>

<script>
export default {
    props: {
        pokemonId: {
            type: Number,
            required: true,
        },
        showPokemon: {
            type: Boolean,
            default: false,
        },
    },

    data() {
        return {
            img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
        };
    },

    computed: {
        imgSrc() {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
        },
    },
};
</script>

<style scope>
.hidden-pokemon {
    filter: brightness(0);
}
/* Pokemon Picture */
.pokemon-container {
    height: 200px;
    display: flex;
    justify-content: center;
}

img {
    height: 200px;
    position: absolute;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}
.hidden-pokemon {
    filter: brightness(0);
}
</style>
