import { getPokemonDetail } from '../service'
import { useState, useEffect, useCallback } from 'react'
import { useParams } from "react-router-dom";

const usePokemonDetail = () => {
    const [ pokemonDetail, setPokemonDetail ] = useState({})
    const { id } = useParams()
    
    const fetchPokemonDetail = useCallback(
        async () => {
            try {
                const response = await getPokemonDetail(id)
                setPokemonDetail(response.data)
            } catch (err) {
                console.error(err)
            }
        },[id]
    );

    useEffect(() => {
        fetchPokemonDetail()
    }, [fetchPokemonDetail])

    return {
        pokemonDetail
    }
}

export default usePokemonDetail;