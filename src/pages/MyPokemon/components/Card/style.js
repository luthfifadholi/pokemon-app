import { css } from '@emotion/react'

const style = {
    CardBox: css`
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #efefef;
    `,
    Name: css`
        text-transform: capitalize;
        font-size: 18px;
        font-weight: 600;
        margin: 0 0 15px;
        color: #2a2a2a;
    `,
    NickName: css`
        text-transform: capitalize;
        font-size: 14px;
        margin: 10px 0 0;
        color: #2a2a2a;
    `,
    Image: css`
        width: 100%;
        display: block;
        border-radius: 5px;
        background-color: #efefef;
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