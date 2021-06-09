/** @jsxImportSource @emotion/react */
import style from './style'
import { Button } from 'antd';
import useRelease from '../../hooks/useRelease'

const Card = (props) => {
    const data = props.data;
    const { showConfirm } = useRelease();

    return (
        <div css={ style.CardBox }>
            <img src={ data.image } alt={ data.name } css={ style.Image } />
            <p css={ style.Title }>Name</p>
            <p css={ style.Name }>{ data.name }</p>

            <p css={ style.Title }>Nickname</p>
            <p css={ style.Name }>{ data.nickname }</p>

            <p css={ style.Title }>Types</p>
            {
                data.types.map((list, index) => {
                    return <span key={ index } css={ style.Type }>{ list.name }</span>
                })
            }
            <Button type="primary" block danger css={ style.CardButton } onClick={() => { showConfirm(data, props.index, props.setOwnedPokemon) }}>
                Release
            </Button>
        </div>
    )
}

export default Card;


