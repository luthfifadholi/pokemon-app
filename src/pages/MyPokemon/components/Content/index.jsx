/** @jsxImportSource @emotion/react */
import style from './style'
import useFetch from '../../hooks/useFetch'
import Card from '../Card/index.jsx'

const Content = () => {
    const { ownedPokemon, setOwnedPokemon } = useFetch()

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