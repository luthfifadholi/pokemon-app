import { css } from '@emotion/react'

const style = {
    CardBox: css`
        width: 100%;
        padding: 15px;
        transition: .3s ease-in-out;
        cursor: pointer;
        border-radius: 5px;
        border: 1px solid #efefef;
        &:hover {
            box-shadow: 0 0 11px rgba(33,33,33,.2); 
        }
    `,
    CardName: css`
        text-transform: capitalize;
        font-size: 18px;
        font-weight: 600;
        margin: 0 0 10px;
        text-align: center;
        color: #2a2a2a;
    `,
    CardOwned: css`
        font-size: 14px;
        text-align: center;
        color: #2a2a2a;
        margin: 0;
    `
}

export default style