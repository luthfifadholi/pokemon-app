import { css } from '@emotion/react'

const style = {
    ContentBox: css`
        padding: 20px 20px 50px;   
    `,
    Image: css`
        width: 240px;
        display: block;
        margin: 0 auto 20px;
        border-radius: 5px;
        background-color: #efefef;
    `,
    ButtonContainer: css`
        display: flex;
        justify-content: center;
    `,
    Name: css`
        font-size: 24px;
        font-weight: 700;
        text-align: center;
        text-transform: capitalize;
        margin-top: 15px;
    `,
    TypeContainer: css`
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
    `,
    TypeList: css`
        padding: 3px 5px;
        border-radius: 2px;
        background-color: #108ee9;
        color: #ffffff;
        font-size: 12px;
        margin-right: 5px;
        text-transform: capitalize;
    `,
    TagList: css`
        margin-bottom: 8px;
    `,
    TextCenter: css`
        text-align: center;
    `
}

export default style