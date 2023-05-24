import React, { useRef } from 'react';

import Image from '~/components/Image';
import Button from '~/components/Button';
import InputSearch from './InputSearch';
import Cart from './Cart';

import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import { BarsIcon, CloseIcon, SearchIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Search() {
    const refMenu = useRef();

    const showMenu = () => {
        refMenu.current.classList.add(cx('mobile__header--open'));
    };

    const hideMenu = () => {
        refMenu.current.classList.remove(cx('mobile__header--open'));
        const clearClass = document.querySelector(`.${cx('mobile__cart--open')}`);
        if (clearClass) clearClass.classList.remove(cx('mobile__cart--open'));
    };
    return (
        <>
            <div className={cx('grid')}>
                <div className={cx('line-separate')}>
                    <div className={cx('wrapper')}>
                        <Button className={cx('mobile-menu')} onClick={showMenu}>
                            <BarsIcon className={cx('mobile-menu-icon')} />
                            <span>MENU</span>
                        </Button>
                        <Button to="/" className={cx('logo-link')}>
                            <Image
                                src="https://s3.cloud.cmctelecom.vn/nhattao1/2017/02/7825391_5db2ec59ea90ace44bbb68ca8e460240.PNG"
                                alt="NT Store - Cửa Hàng Thời Trang Giá Rẻ"
                                className={cx('img')}
                            />
                        </Button>
                        <InputSearch />
                        <Cart />
                        <div className={cx('mobile__header')} ref={refMenu}>
                            <ul className={cx('mobile__header-list')}>
                                <li className={cx('mobile__header-item')}>
                                    <input
                                        type="text"
                                        className={cx('mobile__header-input')}
                                        placeholder="Tìm mọi thứ tại đây..."
                                    />
                                    <div className={cx('search-submit')}>
                                        <SearchIcon className={cx('img')} />
                                    </div>
                                </li>
                                <li className={cx('mobile__header-item')}>
                                    <a href="/">TRANG CHỦ</a>
                                </li>
                                <li className={cx('mobile__header-item')}>
                                    <a href="/products">ÁO THUN</a>
                                </li>
                                <li className={cx('mobile__header-item')}>
                                    <a href="/products">ÁO SƠ MI</a>
                                </li>
                                <li className={cx('mobile__header-item')}>
                                    <a href="/products">ÁO KHOÁC</a>
                                </li>
                                <li className={cx('mobile__header-item')}>
                                    <a href="/products">BALO</a>
                                </li>
                                <li className={cx('mobile__header-item')}>
                                    <a href="/products">THẺ THÔNG MINH</a>
                                </li>
                                <li className={cx('mobile__header-item')}>
                                    <a href="/">ĐĂNG NHẬP</a>
                                </li>
                            </ul>
                            <div className={cx('mobile__header-sub-background')} onClick={hideMenu}></div>
                        </div>
                        <button className={cx('closeBtn')} onClick={hideMenu}>
                            <CloseIcon className={cx('closeBtn-icon')} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Search;
