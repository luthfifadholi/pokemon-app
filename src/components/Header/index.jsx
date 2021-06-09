/** @jsxImportSource @emotion/react */
import style from './style'
import {  UnorderedListOutlined, UserOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header css={style.HeaderContainer}>
            <p css={style.HeaderTitle}>Pokemon</p>
            <div css={style.HeaderMenu}>
                <Link css={style.HeaderMenuList} to={`/`}>
                    <UnorderedListOutlined />
                </Link>
                <Link css={style.HeaderMenuList} to={`/mypokemon`}>
                    <UserOutlined />
                </Link>  
            </div>
        </header>
    )
}

export default Header;