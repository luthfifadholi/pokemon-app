import { Modal, message } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
const { confirm } = Modal;

const useFetch = () => {
    const showConfirm = (data, index, setOwnedPokemon) => {
        confirm({
            title: 'Are you sure you want to release this pokemon?',
            icon: <ExclamationCircleOutlined />,
            content: "You won't be able to revert this!",
            onOk() {
                releasePokemon(data, index, setOwnedPokemon)
            }
        });
    }

    const releasePokemon = (data, index, setOwnedPokemon) => {
        let owned = localStorage.getItem('pokemonOwned') ? JSON.parse(localStorage.getItem('pokemonOwned')) : []
        owned.splice(index, 1)
        localStorage.setItem('pokemonOwned', JSON.stringify(owned))
        setOwnedPokemon(owned)
        message.success(`Success to release ${data.nickname}`);
    }
    
    return {
        showConfirm
    }
}

export default useFetch;