/** @jsxImportSource @emotion/react */
import style from './style'
import { Modal, Button } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;

const Card = (props) => {
    const data = props.data

    const showConfirm = () => {
        confirm({
            title: 'Are you sure you want to release this pokemon?',
            icon: <ExclamationCircleOutlined />,
            content: "You won't be able to revert this!",
            onOk() {
                releasePokemon()
            }
        });
    }

    const releasePokemon = () => {
        let owned = localStorage.getItem('pokemonOwned') ? JSON.parse(localStorage.getItem('pokemonOwned')) : []
        owned.splice(props.index, 1)
        localStorage.setItem('pokemonOwned', JSON.stringify(owned))
        props.setOwnedPokemon(owned)
    }

    return (
        <div css={style.CardBox} to={`/pokemon/${data.id}`}>
            <img src={data.image} alt={data.name} css={style.Image} />
            <p css={style.NickName}>{ data.nickname }</p>
            <p css={style.Name}>{ data.name }</p>
            {
                data.types.map((list, index) => {
                    return <span key={index} css={style.Type}>{ list.name }</span>
                })
            }
            <Button type="primary" block danger css={style.CardButton} onClick={showConfirm}>
                Release
            </Button>
        </div>
    )
}

export default Card;


