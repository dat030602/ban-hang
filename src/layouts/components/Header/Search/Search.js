import React from 'react';

import Image from '~/components/Image';
import Button from '~/components/Button';
import InputSearch from './InputSearch';
import Cart from './Cart';

import styles from './Search.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Search() {
    return (
        <div className={cx('grid')}>
            <div className={cx('line-separate')}>
                <div className={cx('wrapper')}>
                    <Button href="#" className={cx('logo-link')}>
                        <Image
                            src="https://suno.vn/blog/wp-content/uploads/2014/12/nike-lich-su-thiet-ke-logo.jpg"
                            alt="NT Store - Cửa Hàng Thời Trang Giá Rẻ"
                            className={cx('img')}
                        />
                    </Button>
                    <InputSearch />
                    <Cart />
                </div>
            </div>
        </div>
    );
}

export default Search;
