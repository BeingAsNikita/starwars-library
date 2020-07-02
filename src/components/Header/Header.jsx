import React from 'react';
import '../Header/Header.scss';
import logo from '../../assets/img/logo.png';

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo-wrap">
                <img src={logo} alt="logo" />
            </div>
        </header>
    )
}

export default Header;