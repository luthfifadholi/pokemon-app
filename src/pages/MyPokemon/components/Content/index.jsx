/** @jsxImportSource @emotion/react */
import style from './style';
import useFetch from '../../hooks/useFetch';
import Card from '../Card/index.jsx';
import { Empty } from 'antd';

const Content = () => {
    const { ownedPokemon, setOwnedPokemon } = useFetch()

    return (
        <div css={style.ContentBox}>
            { ownedPokemon.length > 0 ? 
                <div css={style.ContentList}>
                    {
                        ownedPokemon.map((list, index) => {
                            return (
                                <Card key={index} data={list} index={index} setOwnedPokemon={setOwnedPokemon} />
                            )
                        })
                    }
                </div> : <Empty />
            }
        </div>
    )
}

export default Content;