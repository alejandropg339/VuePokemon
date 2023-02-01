import pokemonApi from '../api/pokemonApi';

const getPokemons = () => {
    const pokemonsArr = Array.from(Array(650));
    return pokemonsArr.map((_, index) => index++);
};

const getPokemonOptions = async () => {
    const mixPokemons = getPokemons().sort(() => Math.random() - 0.5);
    const pokemons = await getPokemonNames(mixPokemons.splice(0, 4));
    return pokemons;
};

const getPokemonNames = async ([a, b, c, d] = []) => {
    const promiseArr = [pokemonApi.get(`/${a}`), pokemonApi.get(`/${b}`), pokemonApi.get(`/${c}`), pokemonApi.get(`/${d}`)];
    const response = await Promise.all(promiseArr);
    return response.map((pokemon) => ({
        name: pokemon.data.name,
        id: pokemon.data.id,
    }));
};

export default getPokemonOptions;
