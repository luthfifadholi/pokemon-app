import { useState } from 'react'
import { message } from 'antd';
import { normalizerCatchPokemon } from '../normalizer'

const useFetch = () => {
    const [ isModalVisible, setIsModalVisible ] = useState(false);
    const [ inputValue, setInputValue ] = useState('')

    const validateNickname = () => {
        let owned = localStorage.getItem('pokemonOwned') ? JSON.parse(localStorage.getItem('pokemonOwned')) : [];
        let filtered = owned.filter(list => list.nickname.toLowerCase() === inputValue.toLowerCase())
        if(filtered.length > 0) {
            return false
        }else{
            return true
        }
    }
    
    const catchPokemon = (data) => {
        const result = Math.floor(Math.random() * 2);
        if(result === 1) {
            setIsModalVisible(true);
        }else{
            message.error(`Failed to catch ${data.name}`);
        }
    }

    const submitPokemon = (data) => {
        let owned = localStorage.getItem('pokemonOwned') ? JSON.parse(localStorage.getItem('pokemonOwned')) : [];
        if(validateNickname()) {
            const _data = normalizerCatchPokemon(data, inputValue)
            owned = [...owned, ..._data];
            localStorage.setItem('pokemonOwned', JSON.stringify(owned))
    
            setIsModalVisible(false);
            setInputValue('')
            message.success(`Success to catch ${data.name}!`);
        }else{
            message.error(`Nickname already in use`);
        }
    }

    const onChangeInput = (event) => {
        setInputValue(event.target.value);
    };
    
    return {
        catchPokemon,
        submitPokemon,
        isModalVisible,
        setIsModalVisible,
        inputValue,
        onChangeInput
    }
}

export default useFetch;