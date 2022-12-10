import React from 'react';
import './header.scss';

function Header() {
    return (
        <header>
            <nav className='header-nav'>
                <li><a href='#d' className='link'>C3 AI Decision Advantage</a></li>
                <li><a href='#d' className='link'>Dashboard</a></li>
            </nav>
        </header>
    );
}

export default Header;