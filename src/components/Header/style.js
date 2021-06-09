import { css } from '@emotion/react'

const style = {
    HeaderContainer: css`
        width: 100%;
        background-color: #8B8BFF;
        padding: 15px;
        margin: 0;
        position: relative;
    `,
    HeaderTitle: css`
        color: #ffffff;
        margin: 0;
        font-size: 24px;
        font-weight: 700;
        display: inline-block;
    `,
    HeaderMenu: css`
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
    `,
    HeaderMenuList: css`
        color: #ffffff;
        font-size: 16px;
        margin-left: 15px;
        padding: 15px;
        transition: .3s all;
        border-radius: 4px;
        &:hover {
            background-color: rgba(55, 55, 102, 0.6);
            color: #ffffff;
        }
    `
}

export default style