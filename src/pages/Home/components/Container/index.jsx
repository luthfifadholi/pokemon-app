import usePokemonListing from '../../hooks/usePokemonListing'
import Header from '../../../../components/Header/index.jsx'
import Content from '../Content/index.jsx'

function Home() {
    const {
        fetchPokemonListing,
        pokemonList,
        nextUrl
    } = usePokemonListing();

    return (
        <>
            <Header />
            <Content 
                fetchPokemonListing={fetchPokemonListing}
                pokemonList={pokemonList}
                nextUrl={nextUrl}
            />
        </>
    )
}

export default Home;

