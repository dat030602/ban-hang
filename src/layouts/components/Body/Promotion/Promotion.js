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
                            "url('https://media.urbanistnetwork.com/saigoneer/article-images/legacy/2Coo57Ub.jpg')",
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
