import { useState, useEffect } from 'react'
import { message } from 'antd';

const useFetch = () => {
    const [ ownedPokemon, setOwnedPokemon ] = useState([])
    
    useEffect(() => {
        try {
            setOwnedPokemon(localStorage.getItem('pokemonOwned') ? JSON.parse(localStorage.getItem('pokemonOwned')) : [])
        } catch(err) {
            message.error(`Failed to fetch data`);
        }
    },[])
    
    return {
        ownedPokemon,
        setOwnedPokemon
    }
}

export default useFetch;