/** @jsxImportSource @emotion/react */
import style from './style'
import Card from '../Card/index.jsx'
import { useState, useEffect } from 'react'

const Content = () => {
    const [ ownedPokemon, setOwnedPokemon ] = useState([])
    
    useEffect(() => {
        setOwnedPokemon(localStorage.getItem('pokemonOwned') ? JSON.parse(localStorage.getItem('pokemonOwned')) : [])
    },[])

    return (
        <div css={style.ContentBox}>
            <div css={style.ContentList}>
                {
                    ownedPokemon.map((list, index) => {
                        return (
                            <Card key={index} data={list} index={index} setOwnedPokemon={setOwnedPokemon} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Content;