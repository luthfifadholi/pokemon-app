import { css } from '@emotion/react'

const style = {
    ContentBox: css`
        padding: 20px 20px 50px;
    `,
    ContentList: css`
        display: grid;
        grid-gap: 20px 20px;
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        padding-bottom: 20px;
    `,
    ContentButton: css`
        width: 100px;
        border-radius: 6px;
        background-color: #7d7de5;
        color: #ffffff;
        padding: 8px 12px;
        border: none;
        display: block;
        margin: 0 auto;
        cursor: pointer;
    `,
    ContentBottom: css`
        display: flex;
        justify-content: center;
    `
}

export default style