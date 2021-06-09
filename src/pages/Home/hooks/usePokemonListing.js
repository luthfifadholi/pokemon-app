import { getPokemonList } from '../service'
import { useState, useEffect, useCallback } from 'react'

const usePokemonListing = () => {
    const [ pokemonList, setPokemonList ] = useState([])
    const [ nextUrl, setNextUrl ] = useState(undefined)

    const fetchPokemonListing = useCallback(
        async (next) => {
            const _url = next ? next : 'https://pokeapi.co/api/v2/pokemon?limit=24&offset=0'
            try {
                const response = await getPokemonList(_url);
                setPokemonList((pokemonList)=>{return pokemonList.concat(response.data.results)});
                setNextUrl(response.data.next)
            } catch(err) {
                console.error(err)
            }
        },[]
    );

    useEffect(() => {
        fetchPokemonListing()
    }, [fetchPokemonListing])
    
    return {
        fetchPokemonListing,
        pokemonList,
        nextUrl
    }
}

export default usePokemonListing;