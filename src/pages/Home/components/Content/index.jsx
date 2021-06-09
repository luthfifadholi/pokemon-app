/** @jsxImportSource @emotion/react */
import style from './style'
import Card from '../Card/index.jsx'
import { Button } from 'antd';

const Content = (props) => {
    return (
        <div css={style.ContentBox}>
            <p css={style.Total}>Total Pokemon Owned : { props.totalPokemonOwned }</p>
            <div css={style.ContentList}>
                {
                    props.pokemonList.map((list, index) => {
                        return <Card data={list} key={index} />
                    })
                }
            </div>
            <div css={style.ContentBottom}>
                <Button type="primary" size="default" onClick={() => {props.fetchPokemonListing(props.nextUrl)}}>Load More</Button>
            </div>
        </div>
    )
}

export default Content;