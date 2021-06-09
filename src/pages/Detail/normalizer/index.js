export const normalizerPokemonDetail = (data) => {
    let abilities = []
    data && data.abilities && data.abilities.forEach(list => abilities.push({name: list.ability.name}))

    let types = []
    data && data.types && data.types.forEach(list => types.push({name: list.type.name}))

    let moves = []
    data && data.moves && data.moves.forEach(list => moves.push({name: list.move.name}))

    return {
        id: (data && data.id) || undefined, 
        name: (data && data.name) || undefined, 
        image: (data && data.sprites && data.sprites.other && data.sprites.other['official-artwork'].front_default) || undefined, 
        abilities: abilities,
        moves: moves,
        types: types
    }
}

export const normalizerCatchPokemon = (data, nickname) => {
    return [{
        id: data.id,
        name: data.name,
        image: data.image,
        nickname: nickname,
        types: data.types
    }]
}