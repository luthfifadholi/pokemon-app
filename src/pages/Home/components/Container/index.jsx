import usePokemonListing from '../../hooks/usePokemonListing'
import Header from '../../../../components/Header/index.jsx'
import Content from '../Content/index.jsx'

function Home() {
    const {
        fetchPokemonListing,
        pokemonList
    } = usePokemonListing();

    return <div>
        <Header />
        <Content 
            fetchPokemonListing={fetchPokemonListing}
            pokemonList={pokemonList}
        />
    </div>
}

export default Home;

