import { POKEMON } from "../constants";
import { pokeAxios } from "../services";

export const getPokemons = async (page) => {
    try {
        const {
            data: { results },
        } = await pokeAxios.get(POKEMON, {
            params: {
                limit: 6,
                offset: page * 6,
            },
        });
        return await Promise.all(
            results.map(async ({ name }) => await getPokemon(name))
        );
    } catch (error) {
        console.error(error);
    }
};

export const getPokemon = async (name) => {
    try {
        const { data } = await pokeAxios.get(`${POKEMON}/${name}`);

        return {
            ...data,
            sprite: data.sprites.other.dream_world.front_default,
            altsprite: data.sprites.back_default,
            image: data.sprites.other["official-artwork"].front_default,
            icon: data.sprites.versions["generation-iii"].emerald.front_default,
        };
    } catch (error) {
        console.error(error);
    }
};
