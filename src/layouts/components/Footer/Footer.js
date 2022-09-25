import React from 'react';

import styles from './Footer.module.scss';

import classNames from 'classnames/bind';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <>
            <div id="footer" className={cx('footer', 'distance-56')}>
                <div className={cx('grid')}>
                    <div className={cx('footer__info')}>
                        <div className={cx('grid__row')}>
                            <div className={cx('footer__info-contact', 'grid__column-3', 'footer--tablet')}>
                                <div className={cx('footer__info-items')}>
                                    <h3 className={cx('footer__info-title')}>LIÊN HỆ</h3>
                                    <div className={cx('line-strong')}></div>
                                    <div className={cx('footer__info-item')}>
                                        <div className={cx('footer__info-icon-label')}>
                                            <i className="footer__info-icon fas fa-chevron-right"></i>
                                        </div>
                                        <Button href="#" className={cx('footer__info-label')}>
                                            Địa Chỉ: 135B Trần Hưng Đạo Quận 1 TP HCM
                                        </Button>
                                    </div>
                                    <div className={cx('footer__info-item')}>
                                        <div className={cx('footer__info-icon-label')}>
                                            <i className="footer__info-icon fas fa-chevron-right"></i>
                                        </div>
                                        <Button href="#" className={cx('footer__info-label')}>
                                            Email: ntstore.vn.@gmail.com
                                        </Button>
                                    </div>
                                    <div className={cx('footer__info-item')}>
                                        <div className={cx('footer__info-icon-label')}>
                                            <i className="footer__info-icon fas fa-chevron-right"></i>
                                        </div>
                                        <Button href="#" className={cx('footer__info-label')}>
                                            Lúc nào bạn cần chúng tôi đều có mặt
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('footer__info-policy', 'grid__column-3', 'footer--tablet')}>
                                <div className={cx('footer__info-items')}>
                                    <h3 className={cx('footer__info-title')}>CHÍNH SÁCH - DỊCH VỤ</h3>
                                    <div className="line-strong"></div>
                                    <div className={cx('footer__info-item')}>
                                        <Button href="#" className={cx('footer__info-label')}>
                                            Chính sách bảo mật
                                        </Button>
                                    </div>
                                    <div className={cx('footer__info-item')}>
                                        <Button href="#" className={cx('footer__info-label')}>
                                            Chính sách đổi - trả
                                        </Button>
                                    </div>
                                    <div className={cx('footer__info-item')}>
                                        <Button href="#" className={cx('footer__info-label')}>
                                            Chính sách giao hàng
                                        </Button>
                                    </div>
                                    <div className={cx('footer__info-item')}>
                                        <Button href="#" className={cx('footer__info-label')}>
                                            Liên hệ
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('footer__info-follow', 'grid__column-3', 'footer--tablet')}>
                                <div className={cx('footer__info-items')}>
                                    <h3 className={cx('footer__info-title')}>THEO DÕI CHÚNG TÔI</h3>
                                    <div className={cx('line-strong')}></div>
                                    <Button href="#" className={cx('footer__info-logo')}>
                                        <div
                                            className={cx('footer__info-img', 'fix-img-half')}
                                            style={{
                                                backgroundImage:
                                                    "url('https://dosi-in.com/file/detailed/392/dosiin-mende-mende-logo-vshirt-trangao-so-mi-nam-tay-ngan-392745392745.jpg?w=1000&h=1000&fit=fill&fm=webp')",
                                            }}
                                        ></div>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('footer__copyright', 'distance-16')}>
                    Copyright 2022 © <strong>ntstore.vn</strong>
                </div>
            </div>
        </>
    );
}

export default Footer;
