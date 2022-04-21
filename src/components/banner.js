import styled from "styled-components";

const BannerPokemon = styled.div`
        width: 80rem;
        height: 70rem;

`


const Banner =()=>{
    return(
        <BannerPokemon>
            <img src={`${process.env.PUBLIC_URL}/banner.jpg`} alt=""/>
        </BannerPokemon>
    )
}
export default Banner;