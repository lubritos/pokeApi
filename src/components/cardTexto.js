import styled from 'styled-components'
const CardContainer = styled.div`
    width: 20rem;
    background-color: ${props => props.paleta};
    border-radius: 1.5rem;
    margin: 1rem;
    padding: 1rem;
`

const CardTexto =({
    color = 'green',
    title = ''
})=>{
    return (
        <CardContainer paleta={color}>
            <h5 className="card-title">
                {title}
            </h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        </CardContainer>
    )
}
export default CardTexto;