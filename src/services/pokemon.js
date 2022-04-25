import { axiosBase, axiosBase2 } from ".";

const Pokemons = {
    get: (limit) => axiosBase.get(`pokemon?limit=${limit}`)
}

const Pokedex = {
    get: () => axiosBase2.get(`pokedex/kalos`)
}

export {
    Pokemons,
    Pokedex
};