import React from 'react';

import styles from './FeatureProducts.module.scss';

import classNames from 'classnames/bind';
import Button from '~/components/Button';
import Text from '~/components/Text';
import Star from '~/components/Star';

const cx = classNames.bind(styles);

function FeatureProducts() {
    return (
        <>
            <div className={cx('products', 'distance-56')}>
                <h3 className={cx('featured-products-title')}>Sản Phẩm Nổi Bật</h3>
                <div className={cx('products')}>
                    <div className={cx('grid__row', 'distance-16')}>
                        <div className={cx('grid__column-4')}>
                            <Button href="#" className={cx('product-item')}>
                                <div
                                    className={cx('product-item-img', 'fix-img-75')}
                                    style={{
                                        backgroundImage:
                                            "url('https://dosi-in.com/file/detailed/392/dosiin-mende-mende-logo-vshirt-trangao-so-mi-nam-tay-ngan-392745392745.jpg?w=1000&h=1000&fit=fill&fm=webp')",
                                    }}
                                ></div>
                                <div className={cx("product-info")}>
                                    <h5 className={cx("product-title")}>Áo Thun BOBUI CHỮ ANGEL Mymo</h5>
                                    <Star amount={3}/>
                                    <div className={cx("product-price-wrap")}>
                                        <Text className={cx("product-price")}>100.000</Text>
                                        <Text className={cx("product-price-currency","no-space")}>đ</Text>
                                    </div>
                                </div>
                            </Button>
                        </div>
                        <div className={cx('grid__column-4')}>
                            <Button href="#" className={cx('product-item')}>
                                <div
                                    className={cx('product-item-img', 'fix-img-75')}
                                    style={{
                                        backgroundImage:
                                            "url('https://dosi-in.com/file/detailed/392/dosiin-mende-mende-logo-vshirt-trangao-so-mi-nam-tay-ngan-392745392745.jpg?w=1000&h=1000&fit=fill&fm=webp')",
                                    }}
                                ></div>
                                <div className={cx("product-info")}>
                                    <h5 className={cx("product-title")}>Áo Thun BOBUI CHỮ ANGEL Mymo</h5>
                                    <Star />
                                    <div className={cx("product-price-wrap")}>
                                        <Text className={cx("product-price")}>100.000</Text>
                                        <Text className={cx("product-price-currency","no-space")}>đ</Text>
                                    </div>
                                </div>
                            </Button>
                        </div>
                        <div className={cx('grid__column-4')}>
                            <Button href="#" className={cx('product-item')}>
                                <div
                                    className={cx('product-item-img', 'fix-img-75')}
                                    style={{
                                        backgroundImage:
                                            "url('https://dosi-in.com/file/detailed/392/dosiin-mende-mende-logo-vshirt-trangao-so-mi-nam-tay-ngan-392745392745.jpg?w=1000&h=1000&fit=fill&fm=webp')",
                                    }}
                                ></div>
                                <div className={cx("product-info")}>
                                    <h5 className={cx("product-title")}>Áo Thun BOBUI CHỮ ANGEL Mymo</h5>
                                    <Star amount={3}/>
                                    <div className={cx("product-price-wrap")}>
                                        <Text className={cx("product-price")}>100.000</Text>
                                        <Text className={cx("product-price-currency","no-space")}>đ</Text>
                                    </div>
                                </div>
                            </Button>
                        </div>
                        <div className={cx('grid__column-4')}>
                            <Button href="#" className={cx('product-item')}>
                                <div
                                    className={cx('product-item-img', 'fix-img-75')}
                                    style={{
                                        backgroundImage:
                                            "url('https://dosi-in.com/file/detailed/392/dosiin-mende-mende-logo-vshirt-trangao-so-mi-nam-tay-ngan-392745392745.jpg?w=1000&h=1000&fit=fill&fm=webp')",
                                    }}
                                ></div>
                                <div className={cx("product-info")}>
                                    <h5 className={cx("product-title")}>Áo Thun BOBUI CHỮ ANGEL Mymo</h5>
                                    <Star amount={3}/>
                                    <div className={cx("product-price-wrap")}>
                                        <Text className={cx("product-price")}>100.000</Text>
                                        <Text className={cx("product-price-currency","no-space")}>đ</Text>
                                    </div>
                                </div>
                            </Button>
                        </div>
                        <div className={cx('grid__column-4')}>
                            <Button href="#" className={cx('product-item')}>
                                <div
                                    className={cx('product-item-img', 'fix-img-75')}
                                    style={{
                                        backgroundImage:
                                            "url('https://dosi-in.com/file/detailed/392/dosiin-mende-mende-logo-vshirt-trangao-so-mi-nam-tay-ngan-392745392745.jpg?w=1000&h=1000&fit=fill&fm=webp')",
                                    }}
                                ></div>
                                <div className={cx("product-info")}>
                                    <h5 className={cx("product-title")}>Áo Thun BOBUI CHỮ ANGEL Mymo</h5>
                                    <Star amount={3}/>
                                    <div className={cx("product-price-wrap")}>
                                        <Text className={cx("product-price")}>100.000</Text>
                                        <Text className={cx("product-price-currency","no-space")}>đ</Text>
                                    </div>
                                </div>
                            </Button>
                        </div>
                        <div className={cx('grid__column-4')}>
                            <Button href="#" className={cx('product-item')}>
                                <div
                                    className={cx('product-item-img', 'fix-img-75')}
                                    style={{
                                        backgroundImage:
                                            "url('https://dosi-in.com/file/detailed/392/dosiin-mende-mende-logo-vshirt-trangao-so-mi-nam-tay-ngan-392745392745.jpg?w=1000&h=1000&fit=fill&fm=webp')",
                                    }}
                                ></div>
                                <div className={cx("product-info")}>
                                    <h5 className={cx("product-title")}>Áo Thun BOBUI CHỮ ANGEL Mymo</h5>
                                    <Star amount={3}/>
                                    <div className={cx("product-price-wrap")}>
                                        <Text className={cx("product-price")}>100.000</Text>
                                        <Text className={cx("product-price-currency","no-space")}>đ</Text>
                                    </div>
                                </div>
                            </Button>
                        </div>
                        <div className={cx('grid__column-4')}>
                            <Button href="#" className={cx('product-item')}>
                                <div
                                    className={cx('product-item-img', 'fix-img-75')}
                                    style={{
                                        backgroundImage:
                                            "url('https://dosi-in.com/file/detailed/392/dosiin-mende-mende-logo-vshirt-trangao-so-mi-nam-tay-ngan-392745392745.jpg?w=1000&h=1000&fit=fill&fm=webp')",
                                    }}
                                ></div>
                                <div className={cx("product-info")}>
                                    <h5 className={cx("product-title")}>Áo Thun BOBUI CHỮ ANGEL Mymo</h5>
                                    <Star amount={3}/>
                                    <div className={cx("product-price-wrap")}>
                                        <Text className={cx("product-price")}>100.000</Text>
                                        <Text className={cx("product-price-currency","no-space")}>đ</Text>
                                    </div>
                                </div>
                            </Button>
                        </div>
                        <div className={cx('grid__column-4')}>
                            <Button href="#" className={cx('product-item')}>
                                <div
                                    className={cx('product-item-img', 'fix-img-75')}
                                    style={{
                                        backgroundImage:
                                            "url('https://dosi-in.com/file/detailed/392/dosiin-mende-mende-logo-vshirt-trangao-so-mi-nam-tay-ngan-392745392745.jpg?w=1000&h=1000&fit=fill&fm=webp')",
                                    }}
                                ></div>
                                <div className={cx("product-info")}>
                                    <h5 className={cx("product-title")}>Áo Thun BOBUI CHỮ ANGEL Mymo</h5>
                                    <Star amount={3}/>
                                    <div className={cx("product-price-wrap")}>
                                        <Text className={cx("product-price")}>100.000</Text>
                                        <Text className={cx("product-price-currency","no-space")}>đ</Text>
                                    </div>
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className={cx("see-all")}>
                    <button className={cx("btn-circle")}>Xem Toàn Bộ</button>
                </div>
            </div>
        </>
    );
}

export default FeatureProducts;
