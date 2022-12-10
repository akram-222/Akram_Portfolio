import React from 'react';
import './header.scss';

function Header() {
    return (
        <header>
            <nav className='header-nav'>
                <li><a href='#d' className='link link__color--effect'>C3 AI Decision Advantage</a></li>
                <li><a href='#d' className='link link__color--effect'>Dashboard</a></li>
            </nav>
        </header>
    );
}

export default Header;