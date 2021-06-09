/** @jsxImportSource @emotion/react */
import style from './style'
import { Link } from 'react-router-dom'
import { UnorderedListOutlined, UserOutlined } from '@ant-design/icons';
import { ArrowLeftOutlined } from '@ant-design/icons';

const Header = ({ title, showBackIcon }) => {
    const backToPreviousPage = () => {
        window.history.back();
    }

    return (
        <div css={ style.HeaderContainer }>
            <header css={ style.Header }>
                { showBackIcon ? <span css={ style.HeaderIcon } onClick={() => { backToPreviousPage() }}><ArrowLeftOutlined /></span> : null }
                <p css={ style.HeaderTitle }>{ title }</p>
                <div css={ style.HeaderMenu }>
                    <Link css={ style.HeaderMenuList } to={`/`}>
                        <UnorderedListOutlined />
                    </Link>
                    <Link css={ style.HeaderMenuList } to={`/mypokemon`}>
                        <UserOutlined />
                    </Link>  
                </div>
            </header>
        </div>
    )
}

export default Header;