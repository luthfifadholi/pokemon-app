import axios from 'axios'

export const getPokemonDetail = (id) => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
}
