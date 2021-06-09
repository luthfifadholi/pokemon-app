/** @jsxImportSource @emotion/react */
import style from './style'
import Card from '../Card/index.jsx'
import { Button } from 'antd';

const Content = (props) => {
    return (
        <div css={style.ContentBox}>
            <div css={style.ContentList}>
                {
                    props.pokemonList.map((list, index) => {
                        return <Card data={list} key={index} />
                    })
                }
            </div>
            <div css={style.ContentBottom}>
                <Button primary size="default" onClick={props.fetchPokemonListing}>Load More</Button>
            </div>
        </div>
    )
}

export default Content;