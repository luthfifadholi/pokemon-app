/** @jsxImportSource @emotion/react */
import style from './style'
import { Modal, Button, Input, List, Card } from 'antd';
import { useState } from 'react'
import { normalizerCatchPokemon, normalizerPokemonDetail } from '../../normalizer'
import { capitalizeEachWord, removeHyphens } from '../../../../utils/string'

const Content = (props) => {
    const data = normalizerPokemonDetail(props.data)

    const [ inputValue, setInputValue ] = useState('')
    const [ isModalVisible, setIsModalVisible ] = useState(false);

    const listData = [
        {
            title: 'Abilities',
            data: data.abilities
        },
        {
            title: 'Moves',
            data: data.moves
        }
    ];

    const validateNickname = () => {
        let owned = localStorage.getItem('pokemonOwned') ? JSON.parse(localStorage.getItem('pokemonOwned')) : [];
        let filtered = owned.filter(list => list.nickname.toLowerCase() === inputValue.toLowerCase())
        if(filtered.length > 0) {
            return false
        }else{
            return true
        }
    }
    
    const catchPokemon = () => {
        const result = Math.floor(Math.random() * 2);
        if(result === 1) {
            setIsModalVisible(true);
        }
    }

    const submitPokemon = () => {
        let owned = localStorage.getItem('pokemonOwned') ? JSON.parse(localStorage.getItem('pokemonOwned')) : [];
        if(validateNickname()) {
            const _data = normalizerCatchPokemon(data, inputValue)
            owned = [...owned, ..._data];
            localStorage.setItem('pokemonOwned', JSON.stringify(owned))
    
            setIsModalVisible(false);
            setInputValue('')
        }else{
            console.log('error nickname')
        }
    }

    
    
    const onChangeInput = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div css={style.ContentBox}>
            <img src={data.image} alt={data.name} css={style.Image} />
            <div css={style.ButtonContainer}>
                <Button size="default" onClick={catchPokemon}>Catch</Button>
            </div>
            <h1 css={style.Name}>{ data.name }</h1>
            <div css={style.TypeContainer}>
                {
                    data.types.map((list, index) => {
                        return (
                            <span key={index} css={style.TypeList}>{ list.name }</span>
                        )
                    })
                }
            </div>

            <List
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 2,
                    lg: 2,
                    xl: 2,
                    xxl: 2,
                }}
                dataSource={listData}
                renderItem={(item,index) => (
                    <List.Item>
                        <Card title={item.title}>
                            {
                                item.data.map((list, index) => {
                                    return (
                                        <div key={index}>{ capitalizeEachWord(removeHyphens(list.name)) }</div>
                                    )
                                })
                            }
                        </Card>
                    </List.Item>
                )}
            />

            <Modal 
                visible={isModalVisible} 
                title="Give Nickname" 
                onOk={submitPokemon} 
                okText="Save" 
                cancelButtonProps={{ style: { display: 'none' } }} 
                maskClosable={false}
                closable={false}
            >
                <Input type="text" name="name" onChange={onChangeInput} value={inputValue} />
            </Modal>
        </div>
    )
}

export default Content;