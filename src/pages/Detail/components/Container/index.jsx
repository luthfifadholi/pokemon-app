import Header from '../../../../components/Header/index.jsx'
import Content from '../Content/index.jsx'
import usePokemonDetail from '../../hooks/usePokemonDetail'

function Detail() {
    const { pokemonDetail } = usePokemonDetail();

    return (
        <>
            <Header />
            <Content data={pokemonDetail} />
        </>
    )
}

export default Detail;

