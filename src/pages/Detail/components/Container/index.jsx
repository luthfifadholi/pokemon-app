import Header from '../../../../components/Header/index.jsx'
import Content from '../Content/index.jsx'
import useFetch from '../../hooks/useFetch'

function Detail() {
    const { pokemonDetail } = useFetch();

    return (
        <>
            <Header title="Detail" showBackIcon={true} />
            <Content data={pokemonDetail} />
        </>
    )
}

export default Detail;

