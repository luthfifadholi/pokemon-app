import Header from '../../../../components/Header/index.jsx'
import Content from '../Content/index.jsx'
import usePokemonDetail from '../../hooks/usePokemonDetail'

function Detail() {
    const {
        pokemonDetail
    } = usePokemonDetail();

    return <div>
        <Header />
        <Content data={pokemonDetail} />
    </div>
}

export default Detail;

