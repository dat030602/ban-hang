import React from 'react';

import styles from './Sell.module.scss';

import classNames from 'classnames/bind';
import Button from '~/components/Button';
import Text from '~/components/Text';

const cx = classNames.bind(styles);

function Sell() {
    return (
        <>
            <div className={cx('wrapper', 'distance-56')}>
                <div className={cx('items')}>
                    <div className={cx('grid__row')}>
                        <div className={cx('grid__column-3', 'distance-24')}>
                            <Button className={cx('item')} href="#">
                                <div className={cx('item-heading')}>
                                    <h3 className={cx('item-heading-title')}>BOBUI BÓNG BAY</h3>
                                    <h5 className={cx('item-heading-type-product')}>Sản Phẩm Trending</h5>
                                </div>
                                <div className={cx('item-body')}>
                                    <div
                                        className={cx('item-img', 'fix-img-75')}
                                        style={{
                                            backgroundImage:
                                                "url('https://dosi-in.com/file/detailed/392/dosiin-mende-mende-logo-vshirt-trangao-so-mi-nam-tay-ngan-392745392745.jpg?w=1000&h=1000&fit=fill&fm=webp')",
                                        }}
                                    ></div>
                                    <div className={cx('item-price')}>
                                        <Text className={cx('item-price-product')}>130.000</Text>
                                        <Text className={cx('item-price-currency')}>VNĐ</Text>
                                    </div>
                                    <div className={cx('item-sell')}>
                                        <p className={cx('item-sell-label')}>Khuyến Mãi</p>
                                        <div className={cx('item-sell-per')}>
                                            <p className={cx('item-sell-percent')}>10</p>
                                            <p className={cx('item-sell-percent-icon')}>%</p>
                                        </div>
                                    </div>
                                    <Button className={cx('item-buy')}>
                                        <i className="item-sell-icon fas fa-shopping-cart"></i> MUA NGAY
                                    </Button>
                                    <p className={cx('item-sell-now')}>
                                        <i className="far fa-clock"></i> KHUYẾN MÃI HÔM NAY
                                    </p>
                                </div>
                            </Button>
                        </div>
                        <div className={cx('grid__column-3', 'distance-24')}>
                            <Button className={cx('item')} href="#">
                                <div className={cx('item-heading')}>
                                    <h3 className={cx('item-heading-title')}>BOBUI BÓNG BAY</h3>
                                    <h5 className={cx('item-heading-type-product')}>Sản Phẩm Trending</h5>
                                    <div className={cx('item-best-sell')}>
                                        <Button>BEST SELLER</Button>
                                    </div>
                                </div>
                                <div className={cx('item-body')}>
                                    <div
                                        className={cx('item-img', 'fix-img-75')}
                                        style={{
                                            backgroundImage:
                                                "url('https://dosi-in.com/file/detailed/392/dosiin-mende-mende-logo-vshirt-trangao-so-mi-nam-tay-ngan-392745392745.jpg?w=1000&h=1000&fit=fill&fm=webp')",
                                        }}
                                    ></div>
                                    <div className={cx('item-price')}>
                                        <Text className={cx('item-price-product')}>130.000</Text>
                                        <Text className={cx('item-price-currency')}>VNĐ</Text>
                                    </div>
                                    <div className={cx('item-sell')}>
                                        <p className={cx('item-sell-label')}>Khuyến Mãi</p>
                                        <div className={cx('item-sell-per')}>
                                            <p className={cx('item-sell-percent')}>10</p>
                                            <p className={cx('item-sell-percent-icon')}>%</p>
                                        </div>
                                    </div>
                                    <Button className={cx('item-buy')}>
                                        <i className="item-sell-icon fas fa-shopping-cart"></i>MUA NGAY
                                    </Button>
                                    <p className={cx('item-sell-now')}>
                                        <i className="far fa-clock"></i> KHUYẾN MÃI HÔM NAY
                                    </p>
                                </div>
                            </Button>
                        </div>
                        <div className={cx('grid__column-3', 'distance-24')}>
                            <Button className={cx('item')} href="#">
                                <div className={cx('item-heading')}>
                                    <h3 className={cx('item-heading-title')}>BOBUI BÓNG BAY</h3>
                                    <h5 className={cx('item-heading-type-product')}>Sản Phẩm Trending</h5>
                                </div>
                                <div className={cx('item-body')}>
                                    <div
                                        className={cx('item-img', 'fix-img-75')}
                                        style={{
                                            backgroundImage:
                                                "url('https://dosi-in.com/file/detailed/392/dosiin-mende-mende-logo-vshirt-trangao-so-mi-nam-tay-ngan-392745392745.jpg?w=1000&h=1000&fit=fill&fm=webp')",
                                        }}
                                    ></div>
                                    <div className={cx('item-price')}>
                                        <Text className={cx('item-price-product')}>130.000</Text>
                                        <Text className={cx('item-price-currency')}>VNĐ</Text>
                                    </div>
                                    <div className={cx('item-sell')}>
                                        <p className={cx('item-sell-label')}>Khuyến Mãi</p>
                                        <div className={cx('item-sell-per')}>
                                            <p className={cx('item-sell-percent')}>10</p>
                                            <p className={cx('item-sell-percent-icon')}>%</p>
                                        </div>
                                    </div>
                                    <Button className={cx('item-buy')}>
                                        <i className="item-sell-icon fas fa-shopping-cart"></i> MUA NGAY
                                    </Button>
                                    <p className={cx('item-sell-now')}>
                                        <i className="far fa-clock"></i> KHUYẾN MÃI HÔM NAY
                                    </p>
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sell;
