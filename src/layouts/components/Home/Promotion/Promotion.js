import React from 'react';

import styles from './Promotion.module.scss';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Promotion() {
    return (
        <>
            <div className={cx('wrapper', 'distance-56')}>
                <div
                    className={cx('img', 'fix-img-half')}
                    style={{
                        backgroundImage:
                            "url('https://firebasestorage.googleapis.com/v0/b/ban-hang-a8c40.appspot.com/o/img%2Fabout-shop%2F2-10.jpeg?alt=media&token=00c2a354-d0d7-48e5-bfbc-5c0b31d9b774')",
                    }}
                ></div>

                <div className={cx('content-text')}>
                    <div className={cx('content')}>
                        <h5 className={cx('content-title')}>Khuyến mãi siêu sale</h5>
                        <p className={cx('content-decription')}>Khuyến mãi siêu sale</p>
                        <div className={cx('content-option')}>
                            <button className={cx('btn-sharp', 'content-buy')}>Mua Ngay</button>
                            <button className={cx('btn-sharp', 'content-recevie')}>Nhận voucher</button>
                        </div>
                    </div>
                </div>
                <div className="overlay"></div>
            </div>
        </>
    );
}

export default Promotion;
