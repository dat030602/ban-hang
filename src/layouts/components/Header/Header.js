import React from 'react';
import 'tippy.js/dist/tippy.css';
import Navbar from './Navbar';
import Search from './Search';
import Control from './Control';

import styles from './Header.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Header({ children }) {
    return (
        <>
            <header className={cx('header')}>
                <Navbar />
                <Search />
                <Control />
            </header>
        </>
    );
}

export default Header;
