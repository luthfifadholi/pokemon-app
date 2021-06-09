import { getPokemonDetail } from '../service'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

const usePokemonDetail = () => {
    const [ pokemonDetail, setPokemonDetail ] = useState({})
    const { id } = useParams()

    const fetchPokemonDetail = async () => {
        try {
            const response = await getPokemonDetail(id)
            setPokemonDetail(response.data)
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        fetchPokemonDetail()
    }, [id])

    return {
        pokemonDetail
    }
}

export default usePokemonDetail;