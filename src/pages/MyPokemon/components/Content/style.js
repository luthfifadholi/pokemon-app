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
    `
}

export default style