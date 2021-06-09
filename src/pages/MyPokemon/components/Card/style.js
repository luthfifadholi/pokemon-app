import { css } from '@emotion/react'

const style = {
    CardBox: css`
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #efefef;
    `,
    Title: css`
        text-transform: capitalize;
        font-size: 12px;
        margin: 0;
        color: #2a2a2a;
    `,
    Name: css`
        text-transform: capitalize;
        font-size: 16px;
        font-weight: 600;
        margin: 0 0 10px;
        color: #2a2a2a;
    `,
    Image: css`
        width: 100%;
        display: block;
        border-radius: 5px;
        background-color: #efefef;
        margin-bottom: 10px;
    `,
    Type: css`
        padding: 3px 7px;
        border-radius: 2px;
        background-color: #108ee9;
        color: #ffffff;
        font-size: 12px;
        margin-right: 5px;
        text-transform: capitalize;
    `,
    CardButton: css`
        margin-top: 15px;
    `
}

export default style