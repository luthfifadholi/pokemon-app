import useFetch from '../../hooks/useFetch'
import Header from '../../../../components/Header/index.jsx'
import Content from '../Content/index.jsx'

function Home() {
    const {
        fetchPokemonListing,
        pokemonList,
        nextUrl
    } = useFetch();

    return (
        <>
            <Header title="Pokedex" showBackIcon={false} />
            <Content 
                fetchPokemonListing={fetchPokemonListing}
                pokemonList={pokemonList}
                nextUrl={nextUrl}
            />
        </>
    )
}

export default Home;

