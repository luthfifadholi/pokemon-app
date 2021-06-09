/** @jsxImportSource @emotion/react */
import style from './style'
import { Modal, Button, Input, List, Card } from 'antd';
import { normalizerPokemonDetail } from '../../normalizer'
import { capitalizeEachWord, removeHyphens } from '../../../../utils/string'
import useCatch from '../../hooks/useCatch'

const Content = (props) => {
    const data = normalizerPokemonDetail(props.data)
    const { 
        catchPokemon, 
        submitPokemon, 
        inputValue, 
        onChangeInput,
        isModalVisible 
    } = useCatch();

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

    return (
        <div css={style.ContentBox}>
            <img src={data.image} alt={data.name} css={style.Image} />
            <div css={style.ButtonContainer}>
                <Button size="default" onClick={() => { catchPokemon(data) }}>Catch</Button>
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
                renderItem={(item) => (
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
                onOk={() => { submitPokemon(data) }} 
                okText="Save" 
                cancelButtonProps={{ style: { display: 'none' } }} 
                maskClosable={false}
                closable={false}
            >
                <Input type="text" name="name" value={inputValue} onChange={(event) => { onChangeInput(event) }} />
            </Modal>
        </div>
    )
}

export default Content;