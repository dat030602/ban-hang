import React, { useRef, useState } from 'react';

import styles from './Products.module.scss';

import classNames from 'classnames/bind';
import Text from '~/components/Text';
import Button from '~/components/Button';
import Star from '~/components/Star';

import images from '~/assets/img';
import Image from '~/components/Image';
import { SlidersIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Products({ children }) {
    const [valueMin, setValueMin] = useState(0);
    const [valueMax, setValueMax] = useState(10000000);
    const [isActiveMin, setIsActiveMin] = useState(false);
    const [isActiveMax, setIsActiveMax] = useState(false);

    var formatter = new Intl.NumberFormat('es-vi', {
        currency: 'VND',
    });

    const refFilter = useRef();
    function showProductMenu() {
        refFilter.current.classList.add(cx('link-sort--open'));
    }

    function hideProductMenu() {
        refFilter.current.classList.remove(cx('link-sort--open'));
    }
    return (
        <div className={cx('distance')}>
            <div className={cx('grid')}>
                <div id={cx('products')} className={cx('distance-56')}>
                    <div className={cx('products__heading')}>
                        <div className={cx('products__heading-links')}>
                            <div className={cx('products__heading-link-current')}>
                                <Button to='/' className={cx('products__heading-link-current-item')}>
                                    Home
                                </Button>
                                <Text>/</Text>
                                <Button
                                    to='#'
                                    className={cx(
                                        'products__heading-link-current-item',
                                        'products__heading-link-current--active',
                                    )}
                                >
                                    Áo Thun
                                </Button>
                            </div>
                            <div className={cx('products__heading-link-sort')} onClick={showProductMenu}>
                                <SlidersIcon className={cx('sort-icon')} /> <span>SẮP XẾP</span>
                            </div>
                            <div className={cx('link-sort__active-filter', 'link-sort__no-active-filter')}>
                                <ul className={cx('link-sort-list-min-max', 'link-sort-list-min-max--outside')}>
                                    <li className={cx('link-sort-list-min-max-item')}>
                                        <Button to='#' className={cx('link-sort-list-min-max-link')}>
                                            <Text className={cx('link-sort-list-min-max-x')}>x </Text>
                                            <Text className={cx('link-sort-list-min-max-label')}>Min</Text>
                                            <div className={cx('product-price-wrap')}>
                                                <Text className={cx('product-price product-price-min')}>
                                                    {formatter.format(valueMin)}
                                                </Text>
                                                <Text className={cx('product-price-currency', 'no-space')}>đ</Text>
                                            </div>
                                        </Button>
                                    </li>
                                    <li className={cx('link-sort-list-min-max-item')}>
                                        <Button to='#' className={cx('link-sort-list-min-max-link')}>
                                            <Text className={cx('link-sort-list-min-max-x')}>x </Text>
                                            <Text className={cx('link-sort-list-min-max-label')}>Max</Text>
                                            <div className={cx('product-price-wrap')}>
                                                <Text className={cx('product-price product-price-max')}>
                                                    {valueMax !== 10000000 ? formatter.format(valueMax) : 'ထ'}
                                                </Text>
                                                {valueMax !== 10000000 && (
                                                    <Text className={cx('product-price-currency','no-space')}>đ</Text>
                                                )}
                                            </div>
                                        </Button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={cx('products__heading-sorting')}>
                            <select name='sorting-product' className={cx('sorting-list')}>
                                <option value='default'>Mặc định</option>
                                <option value='date'>Mới Nhất</option>
                                <option value='popularity'>Phổ biến</option>
                                <option value='rating'>Đánh giá cao</option>
                                <option value='price'>Giá: Từ thấp đến cao</option>
                                <option value='price-desc'>Giá: Từ cao đến thấp</option>
                            </select>
                        </div>
                    </div>
                    <div className={cx('products')}>
                        <div className={cx('grid__row', 'distance-16')}>
                            <div className={cx('grid__column-4')}>
                                <Button to='/product' className={cx('product-item')}>
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
                                <Button to='/product' className={cx('product-item')}>
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
                                <Button to='/product' className={cx('product-item')}>
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
                                <Button to='/product' className={cx('product-item')}>
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
                                <Button to='/product' className={cx('product-item')}>
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
                                <Button to='/product' className={cx('product-item')}>
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
                                <Button to='/product' className={cx('product-item')}>
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
                                <Button to='/product' className={cx('product-item')}>
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
                            <Button to='#' className={cx('pagination-item-link')}>
                                <Image className={cx('arrow-btn')} src={images.leftArrow} />
                            </Button>
                        </li>
                        <li className={cx('pagination-item', 'pagination-item--active')}>
                            <Button to='#' className={cx('pagination-item-link')}>
                                1
                            </Button>
                        </li>
                        <li className={cx('pagination-item')}>
                            <Button to='#' className={cx('pagination-item-link')}>
                                2
                            </Button>
                        </li>
                        <li className={cx('pagination-item')}>
                            <Button to='#' className={cx('pagination-item-link')}>
                                3
                            </Button>
                        </li>
                        <li className={cx('pagination-item')}>
                            <Button to='#' className={cx('pagination-item-link')}>
                                4
                            </Button>
                        </li>
                        <li className={cx('pagination-item')}>
                            <Button to='#' className={cx('pagination-item-link')}>
                                5
                            </Button>
                        </li>
                        <li className={cx('pagination-item')}>
                            <Button to='#' className={cx('pagination-item-link')}>
                                ...
                            </Button>
                        </li>
                        <li className={cx('pagination-item')}>
                            <Button to='#' className={cx('pagination-item-link')}>
                                15
                            </Button>
                        </li>
                        <li className={cx('pagination-item')}>
                            <Button to='#' className={cx('pagination-item-link')}>
                                <Image className={cx('arrow-btn')} src={images.rightArrow} />
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={cx('link-sort')} ref={refFilter}>
                <div className={cx('link-sort-cover')}>
                    <div className={cx('link-sort__active-filter', 'link-sort__no-active-filter')}>
                        <h3 className={cx('link-sort__heading-label')}>ACTIVE FILTERS</h3>
                        <div className={cx('link-sort-seperate')}></div>
                        <ul className={cx('link-sort-list-min-max')}>
                            <li className={cx('link-sort-list-min-max-item')}>
                                <a href='/' className={cx('link-sort-list-min-max-link')}>
                                    <span className={cx('link-sort-list-min-max-x')}>x </span>
                                    <span className={cx('link-sort-list-min-max-label')}>Min</span>
                                    <div className={cx('product-price-wrap')}>
                                        <span className={cx('product-price product-price-min')}>
                                            {formatter.format(valueMin)}
                                        </span>
                                        <span className={cx('product-price-currency', 'no-space')}>đ</span>
                                    </div>
                                </a>
                            </li>
                            <li className={cx('link-sort-list-min-max-item')}>
                                <a href='/' className={cx('link-sort-list-min-max-link')}>
                                    <span className={cx('link-sort-list-min-max-x')}>x </span>
                                    <span className={cx('link-sort-list-min-max-label')}>Max</span>
                                    <div className={cx('product-price-wrap')}>
                                        <Text className={cx('product-price', 'product-price-max')}>
                                            {valueMax !== 10000000 ? formatter.format(valueMax) : 'ထ'}
                                        </Text>
                                        {valueMax !== 10000000 && (
                                            <Text className={cx('product-price-currency','no-space')}>đ</Text>
                                        )}
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <br />
                    </div>
                    <div className={cx('link-sort__heading')}>
                        <h3 className={cx('link-sort__heading-label')}>BROWSE</h3>
                        <div className={cx('link-sort-seperate')}></div>
                        <ul className={cx('link-sort-list')}>
                            <li className={cx('link-sort-item', 'link-sort-item--active')}>
                                <a href='/'>Áo Khoác</a>
                            </li>
                            <li className={cx('link-sort-item')}>
                                <a href='/'>Áo Sơ Mi</a>
                            </li>
                            <li className={cx('link-sort-item')}>
                                <a href='/'>Áo Thun</a>
                            </li>
                            <li className={cx('link-sort-item')}>
                                <a href='/'>Balo</a>
                            </li>
                            <li className={cx('link-sort-item')}>
                                <a href='/'>T shirt Design</a>
                            </li>
                            <li className={cx('link-sort-item')}>
                                <a href='/'>Thẻ Thông Minh</a>
                            </li>
                            <li className={cx('link-sort-item')}>
                                <a href='/'>Uncategorized</a>
                            </li>
                        </ul>
                        <br />
                    </div>
                    <div className={cx('link-sort__filter')}>
                        <h3 className={cx('link-sort__heading-label')}>FILTERS</h3>
                        <div className={cx('link-sort-seperate')}></div>
                        <div className={cx('link-sort__filter-slider')}>
                            <input
                                type='range'
                                className={cx('range-slider__input')}
                                name='min'
                                min='0'
                                max='10000000'
                                step={100000}
                                value={valueMin}
                                onMouseDown={() => {
                                    setIsActiveMin(true);
                                }}
                                onMouseUp={() => {
                                    setIsActiveMin(false);
                                }}
                                onChange={(e) => {
                                    setValueMin(e.currentTarget.value);
                                }}
                                onMouseMove={(e) => {
                                    if (isActiveMin) {
                                        var clientX = e.clientX - 24;
                                        var mWidth = e.currentTarget.clientWidth;
                                        if (clientX <= mWidth && clientX >= 0) {
                                            var percent = (clientX / mWidth) * 100;
                                            document
                                                .querySelector(`.${cx('link-sort__filter-slider')}`)
                                                .style.setProperty('--range-slider-value-low', percent);
                                        }
                                    }
                                }}
                            />
                            <input
                                type='range'
                                className={cx('range-slider__input')}
                                name='max'
                                min='0'
                                max='10000000'
                                step={100000}
                                value={valueMax}
                                onMouseDown={() => {
                                    setIsActiveMax(true);
                                }}
                                onMouseUp={() => {
                                    setIsActiveMax(false);
                                }}
                                onChange={(e) => {
                                    setValueMax(e.currentTarget.value);
                                }}
                                onMouseMove={(e) => {
                                    if (isActiveMax) {
                                        var clientX = e.clientX - 24;
                                        var mWidth = e.currentTarget.clientWidth;
                                        if (clientX <= mWidth && clientX >= 0) {
                                            var percent = (clientX / mWidth) * 100;
                                            document
                                                .querySelector(`.${cx('link-sort__filter-slider')}`)
                                                .style.setProperty('--range-slider-value-high', percent);
                                        }
                                    }
                                }}
                            />
                            <label className={cx('slider-price')}>
                                <span id={cx('min')}>{formatter.format(valueMin)}</span> đến
                                <span id={cx('max')}>
                                    {valueMax !== 10000000 ? formatter.format(valueMax) : 'Không giới hạn'}
                                </span>
                            </label>
                        </div>
                        <div
                            className={cx('link-sort__filter-submit')}
                            onClick={() => {
                                const filters = document.querySelectorAll(
                                    `.${cx('link-sort__active-filter')}.${cx('link-sort__no-active-filter')}`,
                                );
                                filters.forEach((filter) => {
                                    filter.style.display = 'block';
                                });
                            }}
                        >
                            <button className={cx('link-sort__filter-btn')}>Filter</button>
                        </div>
                        <br />
                    </div>
                    <div className={cx('link-sort-sub-background')} onClick={hideProductMenu}></div>
                </div>
            </div>
        </div>
    );
}

export default Products;
