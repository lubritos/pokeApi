import styled from "styled-components";
import Banner from "../components/banner";
import CardImagen from "../components/cardImagen";
import CardTexto from "../components/cardTexto";
import Search from "../components/search";

const Title = styled.h2`
font-size: 1rem;
`

const Home = () => {
    function busqueda(valor) {
        console.log('buscado', valor)
    }

    
    return ( 
        <div>
            <Banner></Banner>
            <Search search={busqueda}></Search>
            {/* <CardImagen></CardImagen> */}
            <CardTexto color="red" title="pokedex"></CardTexto>
            <CardTexto color="blue" title="moves"></CardTexto>
            <CardTexto color="yellow" title="locations"></CardTexto>
            <CardTexto color="purple" title="type Charts"></CardTexto>
            <CardTexto color="green" title="abilities"></CardTexto>
            <CardTexto color="orange" title="items"></CardTexto>
        </div>
    );
}

export default Home;