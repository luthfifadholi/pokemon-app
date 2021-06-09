import { useState, useEffect, useCallback } from 'react'
import { getPokemonList } from '../service'
import { message } from 'antd';

const useFetch = () => {
    const [ pokemonList, setPokemonList ] = useState([])
    const [ nextUrl, setNextUrl ] = useState(undefined)
    const totalPokemonOwned = localStorage.getItem('pokemonOwned') ? JSON.parse(localStorage.getItem('pokemonOwned')).length : [];

    const fetchPokemonListing = useCallback(
        async (next) => {
            const _url = next ? next : 'https://pokeapi.co/api/v2/pokemon?limit=24&offset=0'
            try {
                const response = await getPokemonList(_url);
                setPokemonList((pokemonList)=>{return pokemonList.concat(response.data.results)});
                setNextUrl(response.data.next)
            } catch(err) {
                message.error(`Failed to fetch data`);
            }
        },[]
    );

    useEffect(() => {
        fetchPokemonListing()
    }, [fetchPokemonListing])
    
    return {
        totalPokemonOwned,
        fetchPokemonListing,
        pokemonList,
        nextUrl
    }
}

export default useFetch;