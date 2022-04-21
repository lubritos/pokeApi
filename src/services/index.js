import axios from "axios";

const axiosBase = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
    responseType: 'json'
});

const axiosBase2 = axios.create({
    baseURL: 'https://www.pokemon.com/us/api/',
    responseType: 'json'
});

export {
    axiosBase,
    axiosBase2
}