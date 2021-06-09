/** @jsxImportSource @emotion/react */
import style from './style'
import {Link} from 'react-router-dom'

const Card = (props) => {
    function getId(url) {
        return url.split('/').slice(-2)[0];
    }
    function ownedCount() {
        const ownedPokemon = localStorage.getItem('pokemonOwned') ? JSON.parse(localStorage.getItem('pokemonOwned')) : []
        const filteredList = ownedPokemon.filter(item => item.name === props.data.name)
        return filteredList.length
    }
    return (
        <Link css={style.CardBox} to={`/pokemon/${getId(props.data.url)}`}>
            <p css={style.CardName}>{ props.data.name }</p>
            <p css={style.CardOwned}>Owned: { ownedCount() }</p>
        </Link>
    )
}

export default Card;


