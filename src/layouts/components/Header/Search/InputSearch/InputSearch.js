import React, { useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';

import styles from '../Search.module.scss';
import classNames from 'classnames/bind';
import Input from '~/components/Input';
import Image from '~/components/Image';
import images from '~/assets/img';

const cx = classNames.bind(styles);

function InputSearch() {
    const [onFocusInput, setOnFocusInput] = useState(false);
    return (
        <>
            <HeadlessTippy
                interactive
                appendTo={() => document.body}
                visible={onFocusInput}
                render={(attrs) => (
                    <div className={cx('search-suggest')} tabIndex="-1" {...attrs}>
                        <ul className={cx('search-suggest-list')}>
                            <li className={cx('search-suggest-item')}>
                                <Button to="/products" className={cx('search-suggest-item-label')}>
                                    Áo thun
                                </Button>
                            </li>
                            <li className={cx('search-suggest-item')}>
                                <Button to="/products" className={cx('search-suggest-item-label')}>
                                    Áo sơ mi
                                </Button>
                            </li>
                            <li className={cx('search-suggest-item')}>
                                <Button to="/products" className={cx('search-suggest-item-label')}>
                                    Áo khoác
                                </Button>
                            </li>
                            <li className={cx('search-suggest-item')}>
                                <Button to="/products" className={cx('search-suggest-item-label')}>
                                    Balo
                                </Button>
                            </li>
                            <li className={cx('search-suggest-item')}>
                                <Button to="/products" className={cx('search-suggest-item-label')}>
                                    Thẻ thông minh
                                </Button>
                            </li>
                        </ul>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <div className={cx('search-wrap')}>
                        <Input
                            type="text"
                            className={cx('search-input')}
                            placeholder="Tìm mọi thứ tại đây..."
                            spellCheck={false}
                            onFocus={() => {
                                setOnFocusInput(true);
                            }}
                            onBlur={() => {
                                setOnFocusInput(false);
                            }}
                        />
                    </div>
                    <div className={cx('search-submit')}>
                        <Image className={cx('img')} src={images.search} />
                    </div>
                </div>
            </HeadlessTippy>
        </>
    );
}

export default InputSearch;
