/** @jsxImportSource @emotion/react */
import style from './style'
import { Modal, Button, Input, Divider, Tag } from 'antd';
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

            <Divider orientation="center">Stats</Divider>
            <div css={style.TextCenter}>
                {
                    data.stats.map((list, index) => {
                        return (
                            <Tag color="orange" key={index} css={style.TagList}>{ capitalizeEachWord(removeHyphens(list.name)) } : { list.value }</Tag>
                        )
                    })
                }
            </div>

            <Divider orientation="center">Abilities</Divider>
            <div css={style.TextCenter}>
                {
                    data.abilities.map((list, index) => {
                        return <Tag color="magenta" key={index} css={style.TagList}>{ capitalizeEachWord(removeHyphens(list.name)) }</Tag>
                    })
                }
            </div>

            <Divider orientation="center">Moves</Divider>
            <div css={style.TextCenter}>
                {
                    data.moves.map((list, index) => {
                        return <Tag color="purple" key={index} css={style.TagList}>{ capitalizeEachWord(removeHyphens(list.name)) }</Tag>
                    })
                }
            </div>

            <Modal 
                visible={isModalVisible} 
                title="Caught!" 
                onOk={() => { submitPokemon(data) }} 
                okText="Save" 
                cancelButtonProps={{ style: { display: 'none' } }} 
                maskClosable={false}
                closable={false}
            >
                <p>Give a nickname for your pokemon</p>
                <Input type="text" name="name" value={inputValue} onChange={(event) => { onChangeInput(event) }} />
            </Modal>
        </div>
    )
}

export default Content;