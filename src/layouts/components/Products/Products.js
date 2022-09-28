import React from 'react';

import styles from './Products.module.scss';
import GlobalStyles from '~/components/GlobalStyles/GlobalStyles.module.scss';

import classNames from 'classnames/bind';
import Text from '~/components/Text';
import Button from '~/components/Button';
import Star from '~/components/Star';

import images from '~/assets/img';
import Image from '~/components/Image';

const cx = classNames.bind(styles);
const gx = classNames.bind(GlobalStyles);

function Products({ children }) {
    return (
        <div className={cx('distance')}>
            <div className={gx('grid')}>
                <div id="products" className={cx('distance-56')}>
                    <div className={cx('products__heading')}>
                        <div className={cx('products__heading-links')}>
                            <div className={cx('products__heading-link-current')}>
                                <Button href="#" className={cx('products__heading-link-current-item')}>
                                    Home
                                </Button>
                                <Text>/</Text>
                                <Button
                                    href="#"
                                    className={cx(
                                        'products__heading-link-current-item',
                                        'products__heading-link-current--active',
                                    )}
                                >
                                    Áo Thun
                                </Button>
                            </div>
                            <div className={cx('products__heading-link-sort')}>
                                <i className="fas fa-sliders-h"></i> SẮP XẾP
                            </div>
                            <div className={cx('link-sort__active-filter', 'link-sort__no-active-filter')}>
                                <ul className={cx('link-sort-list-min-max', 'link-sort-list-min-max--outside')}>
                                    <li className={cx('link-sort-list-min-max-item')}>
                                        <Button href="#" className={cx('link-sort-list-min-max-link')}>
                                            <Text className={cx('link-sort-list-min-max-x')}>x </Text>
                                            <Text className={cx('link-sort-list-min-max-label')}>Min</Text>
                                            <div className={cx('product-price-wrap')}>
                                                <Text className={cx('product-price product-price-min')}></Text>
                                                <Text className={cx('product-price-currency', 'no-space')}>đ</Text>
                                            </div>
                                        </Button>
                                    </li>
                                    <li className={cx('link-sort-list-min-max-item')}>
                                        <Button href="#" className={cx('link-sort-list-min-max-link')}>
                                            <Text className={cx('link-sort-list-min-max-x')}>x </Text>
                                            <Text className={cx('link-sort-list-min-max-label')}>Max</Text>
                                            <div className={cx('product-price-wrap')}>
                                                <Text className={cx('product-price product-price-max')}></Text>
                                                <Text className={cx('product-price-currency no-space')}>đ</Text>
                                            </div>
                                        </Button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={cx('products__heading-sorting')}>
                            <select name="sorting-product" className={cx('sorting-list')}>
                                <option value="default">Mặc định</option>
                                <option value="date">Mới Nhất</option>
                                <option value="popularity">Phổ biến</option>
                                <option value="rating">Đánh giá cao</option>
                                <option value="price">Giá: Từ thấp đến cao</option>
                                <option value="price-desc">Giá: Từ cao đến thấp</option>
                            </select>
                        </div>
                    </div>
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
                                    <div className={cx('product-info')}>
                                        <h5 className={cx('product-title')}>Áo Thun BOBUI CHỮ ANGEL Mymo</h5>
                                        <Star amount={3} />
                                        <div className={cx('product-price-wrap')}>
                                            <Text className={cx('product-price')}>100.000</Text>
                                            <Text className={cx('product-price-currency', 'no-space')}>đ</Text>
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
                                    <div className={cx('product-info')}>
                                        <h5 className={cx('product-title')}>Áo Thun BOBUI CHỮ ANGEL Mymo</h5>
                                        <Star amount={3} />
                                        <div className={cx('product-price-wrap')}>
                                            <Text className={cx('product-price')}>100.000</Text>
                                            <Text className={cx('product-price-currency', 'no-space')}>đ</Text>
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
                                    <div className={cx('product-info')}>
                                        <h5 className={cx('product-title')}>Áo Thun BOBUI CHỮ ANGEL Mymo</h5>
                                        <Star amount={3} />
                                        <div className={cx('product-price-wrap')}>
                                            <Text className={cx('product-price')}>100.000</Text>
                                            <Text className={cx('product-price-currency', 'no-space')}>đ</Text>
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
                                    <div className={cx('product-info')}>
                                        <h5 className={cx('product-title')}>Áo Thun BOBUI CHỮ ANGEL Mymo</h5>
                                        <Star amount={3} />
                                        <div className={cx('product-price-wrap')}>
                                            <Text className={cx('product-price')}>100.000</Text>
                                            <Text className={cx('product-price-currency', 'no-space')}>đ</Text>
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
                                    <div className={cx('product-info')}>
                                        <h5 className={cx('product-title')}>Áo Thun BOBUI CHỮ ANGEL Mymo</h5>
                                        <Star amount={3} />
                                        <div className={cx('product-price-wrap')}>
                                            <Text className={cx('product-price')}>100.000</Text>
                                            <Text className={cx('product-price-currency', 'no-space')}>đ</Text>
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
                                    <div className={cx('product-info')}>
                                        <h5 className={cx('product-title')}>Áo Thun BOBUI CHỮ ANGEL Mymo</h5>
                                        <Star amount={3} />
                                        <div className={cx('product-price-wrap')}>
                                            <Text className={cx('product-price')}>100.000</Text>
                                            <Text className={cx('product-price-currency', 'no-space')}>đ</Text>
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
                                    <div className={cx('product-info')}>
                                        <h5 className={cx('product-title')}>Áo Thun BOBUI CHỮ ANGEL Mymo</h5>
                                        <Star amount={3} />
                                        <div className={cx('product-price-wrap')}>
                                            <Text className={cx('product-price')}>100.000</Text>
                                            <Text className={cx('product-price-currency', 'no-space')}>đ</Text>
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
                                    <div className={cx('product-info')}>
                                        <h5 className={cx('product-title')}>Áo Thun BOBUI CHỮ ANGEL Mymo</h5>
                                        <Star amount={3} />
                                        <div className={cx('product-price-wrap')}>
                                            <Text className={cx('product-price')}>100.000</Text>
                                            <Text className={cx('product-price-currency', 'no-space')}>đ</Text>
                                        </div>
                                    </div>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <ul className={cx('pagination')}>
                        <li className={cx('pagination-item')}>
                            <Button href="#" className={cx('pagination-item-link')}>
                                <Image className={cx('arrow-btn')} src={images.leftArrow} />
                            </Button>
                        </li>
                        <li className={cx('pagination-item', 'pagination-item--active')}>
                            <Button href="#" className={cx('pagination-item-link')}>
                                1
                            </Button>
                        </li>
                        <li className={cx('pagination-item')}>
                            <Button href="#" className={cx('pagination-item-link')}>
                                2
                            </Button>
                        </li>
                        <li className={cx('pagination-item')}>
                            <Button href="#" className={cx('pagination-item-link')}>
                                3
                            </Button>
                        </li>
                        <li className={cx('pagination-item')}>
                            <Button href="#" className={cx('pagination-item-link')}>
                                4
                            </Button>
                        </li>
                        <li className={cx('pagination-item')}>
                            <Button href="#" className={cx('pagination-item-link')}>
                                5
                            </Button>
                        </li>
                        <li className={cx('pagination-item')}>
                            <Button href="#" className={cx('pagination-item-link')}>
                                ...
                            </Button>
                        </li>
                        <li className={cx('pagination-item')}>
                            <Button href="#" className={cx('pagination-item-link')}>
                                15
                            </Button>
                        </li>
                        <li className={cx('pagination-item')}>
                            <Button href="#" className={cx('pagination-item-link')}>
                                <Image className={cx('arrow-btn')} src={images.rightArrow} />
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Products;
