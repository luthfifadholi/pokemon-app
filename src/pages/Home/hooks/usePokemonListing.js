import { getPokemonList } from '../service'
import { useState, useEffect } from 'react'

const usePokemonListing = () => {
    const [ pokemonList, setPokemonList ] = useState([])
    const [ nextUrl, setNextUrl ] = useState(undefined)

    const fetchPokemonListing = async () => {
        const _url = nextUrl ? nextUrl : 'https://pokeapi.co/api/v2/pokemon?limit=24&offset=0'
        try {
            const response = await getPokemonList(_url)
            const result = (response && response.data.results) || []
            const _result = [...pokemonList, ...result]
            
            setPokemonList(_result)
            setNextUrl(response.data.next)
        } catch(err) {
            console.error(err)
        }
    }

    useEffect(() => {
        fetchPokemonListing()
    }, [])
    
    return {
        fetchPokemonListing,
        pokemonList,
        nextUrl
    }
}

export default usePokemonListing;