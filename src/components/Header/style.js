import { css } from '@emotion/react'

const style = {
    HeaderContainer: css`
        position: sticky;
        top: 0;
        box-shadow: 0 5px 10px 0 rgba(0,0,0,0.01);
        z-index: 2;
    `,
    Header: css`
        width: 100%;
        background-color: #8B8BFF;
        padding: 12px;
        margin: 0;
        position: relative;
        display: flex;
        align-items: center;
    `,
    HeaderIcon: css`
        color: #ffffff;
        margin-right: 10px;
        cursor: pointer;
        @media only screen and (min-width: 992px) {
            display: none;
        }
    `,
    HeaderTitle: css`
        color: #ffffff;
        margin: 0;
        font-size: 24px;
        font-weight: 700;
        display: inline-block;
        @media only screen and (max-width: 991px) {
            font-size: 20px;
        }
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
        margin-left: 10px;
        padding: 12px 15px;
        transition: .3s all;
        border-radius: 4px;
        &:hover {
            background-color: rgba(55, 55, 102, 0.6);
            color: #ffffff;
        }
    `
}

export default style