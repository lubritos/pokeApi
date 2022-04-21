import { useEffect, useState } from "react";
import styled from "styled-components";
import Banner from "../components/banner";
import CardImagen from "../components/cardImagen";
import CardTexto from "../components/cardTexto";
import Search from "../components/search";
import { Pokemons } from "../services/pokemon";

const Title = styled.h2`
font-size: 1rem;
`
const Container =styled.div`
    width: 100%;
    max-width: 960px;
    display: flex;
    flex-direction : column;
    justify-content: center;
`
const CardContainer =styled.div`
    display:flex;
    flex-wrap: wrap;
`
const Home = () => {
    const [pokes, setPokemons] = useState([])
    function busqueda(valor) {
        console.log('buscado', valor)
    }

    function fetchKantoPokemon(){
        // fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        // .then(response => response.json())
        // .then(allpokemon => console.log(allpokemon))
        Pokemons.get('10')
        .then(allpokemon => setPokemons(allpokemon.data.results)
        )
    }

    useEffect(() => {
        fetchKantoPokemon();
    })

    return ( 
        <Container>
            <Search search={busqueda}></Search>
            {/* <CardImagen></CardImagen> */}
            <CardContainer>
                <CardTexto color="#FB6C6C" title="pokedex"></CardTexto>
                <CardTexto color="#91CAFE" title="moves"></CardTexto>
                <CardTexto color="#FFD86F" title="locations"></CardTexto>
                <CardTexto color="#7C538C" title="type Charts"></CardTexto>
                <CardTexto color="#48D0B0" title="abilities"></CardTexto>
                <CardTexto color="#B1736C" title="items"></CardTexto>
            </CardContainer>
            {pokes.map(pokemon => {
                return (
                    <div>{pokemon.name}</div>
                )
            })}
        </Container>
    );
}

export default Home;