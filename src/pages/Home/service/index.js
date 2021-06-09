import axios from 'axios'

export const getPokemonList = (url) => {
    return axios.get(url)
}
