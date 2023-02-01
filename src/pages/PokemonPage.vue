<template>
    <div v-if="pokemon">
        <h1>Who's that pokemon?</h1>

        <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
        <PokemonOptions :pokemons="pokemonArray" @selection="checkAnswer($event)" />

        <template v-if="showAnswer">
            <h2>{{ message }}</h2>
            <button @click="newGame">Play again</button>
        </template>
    </div>
    <div v-else>
        <h1>...Cargando</h1>
    </div>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue';
import PokemonOptions from '@/components/PokemonOptions.vue';

import getPokemonOptions from '@/helpers/getPokemonOptions';

export default {
    components: { PokemonPicture, PokemonOptions },
    data() {
        return {
            pokemonArray: [],
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: '',
        };
    },
    methods: {
        async mixPokemonsArray() {
            this.pokemonArray = await getPokemonOptions();

            const rndInt = Math.floor(Math.random() * 4);
            this.pokemon = this.pokemonArray[rndInt];
            console.log(this.pokemonArray);
        },

        checkAnswer(selectedId) {
            this.showPokemon = true;
            this.showAnswer = true;
            this.message = selectedId === this.pokemon.id ? `Correcto, el pokemon es ${this.pokemon.name}` : `Ooops el pokemon era ${this.pokemon.name}`;
            console.log('pokemon select event called', selectedId);
        },

        async newGame() {
            this.showPokemon = false;
            this.showAnswer = false;
            this.pokemonArray = [];
            this.pokemon = null;
            await this.mixPokemonsArray();
        },
    },
    mounted() {
        this.mixPokemonsArray();
    },
};
</script>

<style scope>
button {
    width: 100%;
    font-size: 1.25rem;
    border: none;
    border-radius: 8px;
    color: #fff;
    background: #000;
    padding: 10px;
}
</style>
