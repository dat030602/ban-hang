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
                                        <Button to="/" className={cx('footer__info-label')}>
                                            Địa Chỉ: 135B Trần Hưng Đạo Quận 1 TP HCM
                                        </Button>
                                    </div>
                                    <div className={cx('footer__info-item')}>
                                        <div className={cx('footer__info-icon-label')}>
                                            <i className="footer__info-icon fas fa-chevron-right"></i>
                                        </div>
                                        <Button to="/" className={cx('footer__info-label')}>
                                            Email: ntstore.vn.@gmail.com
                                        </Button>
                                    </div>
                                    <div className={cx('footer__info-item')}>
                                        <div className={cx('footer__info-icon-label')}>
                                            <i className="footer__info-icon fas fa-chevron-right"></i>
                                        </div>
                                        <Button to="/" className={cx('footer__info-label')}>
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
                                        <Button to="/" className={cx('footer__info-label')}>
                                            Chính sách bảo mật
                                        </Button>
                                    </div>
                                    <div className={cx('footer__info-item')}>
                                        <Button to="/" className={cx('footer__info-label')}>
                                            Chính sách đổi - trả
                                        </Button>
                                    </div>
                                    <div className={cx('footer__info-item')}>
                                        <Button to="/" className={cx('footer__info-label')}>
                                            Chính sách giao hàng
                                        </Button>
                                    </div>
                                    <div className={cx('footer__info-item')}>
                                        <Button to="/" className={cx('footer__info-label')}>
                                            Liên hệ
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('footer__info-follow', 'grid__column-3', 'footer--tablet')}>
                                <div className={cx('footer__info-items')}>
                                    <h3 className={cx('footer__info-title')}>THEO DÕI CHÚNG TÔI</h3>
                                    <div className={cx('line-strong')}></div>
                                    <Button to="/" className={cx('footer__info-logo')}>
                                        <div
                                            className={cx('footer__info-img', 'fix-img-half')}
                                            style={{
                                                backgroundImage:
                                                    "url('https://firebasestorage.googleapis.com/v0/b/ban-hang-a8c40.appspot.com/o/img%2Ffollow-us%2Ffollow-us.png?alt=media&token=d775a0f5-f419-4c7c-8857-4e4967bea268')",
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
