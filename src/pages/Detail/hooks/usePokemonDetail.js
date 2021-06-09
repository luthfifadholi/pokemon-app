import { useState, useEffect, useCallback } from 'react'
import { getPokemonDetail } from '../service'
import { useParams } from "react-router-dom";
import { message } from 'antd';

const usePokemonDetail = () => {
    const [ pokemonDetail, setPokemonDetail ] = useState({})
    const { id } = useParams()
    
    const fetchPokemonDetail = useCallback(
        async () => {
            try {
                const response = await getPokemonDetail(id)
                setPokemonDetail(response.data)
            } catch (err) {
                message.error(`Failed to fetch data`);
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