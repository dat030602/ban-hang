import React from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';

import styles from './Cart.module.scss';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import images from '~/assets/img';
import Text from '~/components/Text';

const cx = classNames.bind(styles);

function Cart() {
    return (
        <>
            <HeadlessTippy
                interactive
                appendTo={() => document.body}
                delay={[0, 500]}
                render={(attrs) => (
                    <div className={cx('cart-list')} tabIndex="-1" {...attrs}>
                        {/* <!-- cart--have-cart : Có đồ trong giỏ hàng không --> */}
                        <ul className={cx('cart-list-item','cart--have-cart')}>
                            <li className={cx('cart-item')}>
                                <Button href="#" className={cx('cart-logo')}>
                                    <Image
                                        className={cx('cart-img')}
                                        src="https://firebasestorage.googleapis.com/v0/b/ban-hang-a8c40.appspot.com/o/img%2Fao-so-mi-mende-logo-ss2%2F1-1.jpeg?alt=media&token=e27441af-7b93-4dd3-921e-3a012e027a25"
                                        alt=""
                                    />
                                </Button>
                                <div className={cx('cart-info')}>
                                    <Button className={cx('cart-title')} href="#">
                                        Áo Thun XXME THÊU LOGO Mymo
                                    </Button>
                                    <div className={cx('product-price-wrap')}>
                                        <Text className={cx('product-qnt')}>1</Text>
                                        <Text className={cx('product-mul')}>x</Text>
                                        <Text className={cx('product-price')}>100.000</Text>
                                        <Text className={cx('product-price-currency no-space')}>đ</Text>
                                    </div>
                                </div>
                                <Button className={cx('cart-cancel')} href="#">
                                    <Image className={cx('img')} src={images.close} />
                                </Button>
                            </li>
                            <li className={cx('cart-item')}>
                                <Button href="#" className={cx('cart-logo')}>
                                    <Image
                                        className={cx('cart-img')}
                                        src="https://firebasestorage.googleapis.com/v0/b/ban-hang-a8c40.appspot.com/o/img%2Fao-so-mi-mende-logo-ss2%2F1-1.jpeg?alt=media&token=e27441af-7b93-4dd3-921e-3a012e027a25"
                                        alt=""
                                    />
                                </Button>
                                <div className={cx('cart-info')}>
                                    <Button className={cx('cart-title')} href="#">
                                        Áo Thun XXME THÊU LOGO Mymo
                                    </Button>
                                    <div className={cx('product-price-wrap')}>
                                        <Text className={cx('product-qnt')}>1</Text>
                                        <Text className={cx('product-mul')}>x</Text>
                                        <Text className={cx('product-price')}>100.000</Text>
                                        <Text className={cx('product-price-currency no-space')}>đ</Text>
                                    </div>
                                </div>
                                <Button className={cx('cart-cancel')} href="#">
                                    <Image className={cx('img')} src={images.close} />
                                </Button>
                            </li>
                            <li className={cx('cart-item')}>
                                <Button href="#" className={cx('cart-logo')}>
                                    <Image
                                        className={cx('cart-img')}
                                        src="https://firebasestorage.googleapis.com/v0/b/ban-hang-a8c40.appspot.com/o/img%2Fao-so-mi-mende-logo-ss2%2F1-1.jpeg?alt=media&token=e27441af-7b93-4dd3-921e-3a012e027a25"
                                        alt=""
                                    />
                                </Button>
                                <div className={cx('cart-info')}>
                                    <Button className={cx('cart-title')} href="#">
                                        Áo Thun XXME THÊU LOGO Mymo
                                    </Button>
                                    <div className={cx('product-price-wrap')}>
                                        <Text className={cx('product-qnt')}>1</Text>
                                        <Text className={cx('product-mul')}>x</Text>
                                        <Text className={cx('product-price')}>100.000</Text>
                                        <Text className={cx('product-price-currency no-space')}>đ</Text>
                                    </div>
                                </div>
                                <Button className={cx('cart-cancel')} href="#">
                                    <Image className={cx('img')} src={images.close} />
                                </Button>
                            </li>
                            <li className={cx('cart-item')}>
                                <Button href="#" className={cx('cart-logo')}>
                                    <Image
                                        className={cx('cart-img')}
                                        src="https://firebasestorage.googleapis.com/v0/b/ban-hang-a8c40.appspot.com/o/img%2Fao-so-mi-mende-logo-ss2%2F1-1.jpeg?alt=media&token=e27441af-7b93-4dd3-921e-3a012e027a25"
                                        alt=""
                                    />
                                </Button>
                                <div className={cx('cart-info')}>
                                    <Button className={cx('cart-title')} href="#">
                                        Áo Thun XXME THÊU LOGO Mymo
                                    </Button>
                                    <div className={cx('product-price-wrap')}>
                                        <Text className={cx('product-qnt')}>1</Text>
                                        <Text className={cx('product-mul')}>x</Text>
                                        <Text className={cx('product-price')}>100.000</Text>
                                        <Text className={cx('product-price-currency no-space')}>đ</Text>
                                    </div>
                                </div>
                                <Button className={cx('cart-cancel')} href="#">
                                    <Image className={cx('img')} src={images.close} />
                                </Button>
                            </li>
                            <li className={cx('cart-item')}>
                                <Button href="#" className={cx('cart-logo')}>
                                    <Image
                                        className={cx('cart-img')}
                                        src="https://firebasestorage.googleapis.com/v0/b/ban-hang-a8c40.appspot.com/o/img%2Fao-so-mi-mende-logo-ss2%2F1-1.jpeg?alt=media&token=e27441af-7b93-4dd3-921e-3a012e027a25"
                                        alt=""
                                    />
                                </Button>
                                <div className={cx('cart-info')}>
                                    <Button className={cx('cart-title')} href="#">
                                        Áo Thun XXME THÊU LOGO Mymo
                                    </Button>
                                    <div className={cx('product-price-wrap')}>
                                        <Text className={cx('product-qnt')}>1</Text>
                                        <Text className={cx('product-mul')}>x</Text>
                                        <Text className={cx('product-price')}>100.000</Text>
                                        <Text className={cx('product-price-currency no-space')}>đ</Text>
                                    </div>
                                </div>
                                <Button className={cx('cart-cancel')} href="#">
                                    <Image className={cx('img')} src={images.close} />
                                </Button>
                            </li>
                            <li className={cx('cart-item')}>
                                <Button href="#" className={cx('cart-logo')}>
                                    <Image
                                        className={cx('cart-img')}
                                        src="https://firebasestorage.googleapis.com/v0/b/ban-hang-a8c40.appspot.com/o/img%2Fao-so-mi-mende-logo-ss2%2F1-1.jpeg?alt=media&token=e27441af-7b93-4dd3-921e-3a012e027a25"
                                        alt=""
                                    />
                                </Button>
                                <div className={cx('cart-info')}>
                                    <Button className={cx('cart-title')} href="#">
                                        Áo Thun XXME THÊU LOGO Mymo
                                    </Button>
                                    <div className={cx('product-price-wrap')}>
                                        <Text className={cx('product-qnt')}>1</Text>
                                        <Text className={cx('product-mul')}>x</Text>
                                        <Text className={cx('product-price')}>100.000</Text>
                                        <Text className={cx('product-price-currency no-space')}>đ</Text>
                                    </div>
                                </div>
                                <Button className={cx('cart-cancel')} href="#">
                                    <Image className={cx('img')} src={images.close} />
                                </Button>
                            </li>
                            <li className={cx('cart-item')}>
                                <Button href="#" className={cx('cart-logo')}>
                                    <Image
                                        className={cx('cart-img')}
                                        src="https://firebasestorage.googleapis.com/v0/b/ban-hang-a8c40.appspot.com/o/img%2Fao-so-mi-mende-logo-ss2%2F1-1.jpeg?alt=media&token=e27441af-7b93-4dd3-921e-3a012e027a25"
                                        alt=""
                                    />
                                </Button>
                                <div className={cx('cart-info')}>
                                    <Button className={cx('cart-title')} href="#">
                                        Áo Thun XXME THÊU LOGO Mymo
                                    </Button>
                                    <div className={cx('product-price-wrap')}>
                                        <Text className={cx('product-qnt')}>1</Text>
                                        <Text className={cx('product-mul')}>x</Text>
                                        <Text className={cx('product-price')}>100.000</Text>
                                        <Text className={cx('product-price-currency no-space')}>đ</Text>
                                    </div>
                                </div>
                                <Button className={cx('cart-cancel')} href="#">
                                    <Image className={cx('img')} src={images.close} />
                                </Button>
                            </li>
                            <li className={cx('cart-item')}>
                                <Button href="#" className={cx('cart-logo')}>
                                    <Image
                                        className={cx('cart-img')}
                                        src="https://firebasestorage.googleapis.com/v0/b/ban-hang-a8c40.appspot.com/o/img%2Fao-so-mi-mende-logo-ss2%2F1-1.jpeg?alt=media&token=e27441af-7b93-4dd3-921e-3a012e027a25"
                                        alt=""
                                    />
                                </Button>
                                <div className={cx('cart-info')}>
                                    <Button className={cx('cart-title')} href="#">
                                        Áo Thun XXME THÊU LOGO Mymo
                                    </Button>
                                    <div className={cx('product-price-wrap')}>
                                        <Text className={cx('product-qnt')}>1</Text>
                                        <Text className={cx('product-mul')}>x</Text>
                                        <Text className={cx('product-price')}>100.000</Text>
                                        <Text className={cx('product-price-currency no-space')}>đ</Text>
                                    </div>
                                </div>
                                <Button className={cx('cart-cancel')} href="#">
                                    <Image className={cx('img')} src={images.close} />
                                </Button>
                            </li>
                            <li className={cx('cart-item')}>
                                <Button href="#" className={cx('cart-logo')}>
                                    <Image
                                        className={cx('cart-img')}
                                        src="https://firebasestorage.googleapis.com/v0/b/ban-hang-a8c40.appspot.com/o/img%2Fao-so-mi-mende-logo-ss2%2F1-1.jpeg?alt=media&token=e27441af-7b93-4dd3-921e-3a012e027a25"
                                        alt=""
                                    />
                                </Button>
                                <div className={cx('cart-info')}>
                                    <Button className={cx('cart-title')} href="#">
                                        Áo Thun XXME THÊU LOGO Mymo
                                    </Button>
                                    <div className={cx('product-price-wrap')}>
                                        <Text className={cx('product-qnt')}>1</Text>
                                        <Text className={cx('product-mul')}>x</Text>
                                        <Text className={cx('product-price')}>100.000</Text>
                                        <Text className={cx('product-price-currency no-space')}>đ</Text>
                                    </div>
                                </div>
                                <Button className={cx('cart-cancel')} href="#">
                                    <Image className={cx('img')} src={images.close} />
                                </Button>
                            </li>
                            <li className={cx('cart-item')}>
                                <Button href="#" className={cx('cart-logo')}>
                                    <Image
                                        className={cx('cart-img')}
                                        src="https://firebasestorage.googleapis.com/v0/b/ban-hang-a8c40.appspot.com/o/img%2Fao-so-mi-mende-logo-ss2%2F1-1.jpeg?alt=media&token=e27441af-7b93-4dd3-921e-3a012e027a25"
                                        alt=""
                                    />
                                </Button>
                                <div className={cx('cart-info')}>
                                    <Button className={cx('cart-title')} href="#">
                                        Áo Thun XXME THÊU LOGO Mymo
                                    </Button>
                                    <div className={cx('product-price-wrap')}>
                                        <Text className={cx('product-qnt')}>1</Text>
                                        <Text className={cx('product-mul')}>x</Text>
                                        <Text className={cx('product-price')}>100.000</Text>
                                        <Text className={cx('product-price-currency no-space')}>đ</Text>
                                    </div>
                                </div>
                                <Button className={cx('cart-cancel')} href="#">
                                    <Image className={cx('img')} src={images.close} />
                                </Button>
                            </li>
                            <li className={cx('cart-item')}>
                                <Button href="#" className={cx('cart-logo')}>
                                    <Image
                                        className={cx('cart-img')}
                                        src="https://firebasestorage.googleapis.com/v0/b/ban-hang-a8c40.appspot.com/o/img%2Fao-so-mi-mende-logo-ss2%2F1-1.jpeg?alt=media&token=e27441af-7b93-4dd3-921e-3a012e027a25"
                                        alt=""
                                    />
                                </Button>
                                <div className={cx('cart-info')}>
                                    <Button className={cx('cart-title')} href="#">
                                        Áo Thun XXME THÊU LOGO Mymo
                                    </Button>
                                    <div className={cx('product-price-wrap')}>
                                        <Text className={cx('product-qnt')}>1</Text>
                                        <Text className={cx('product-mul')}>x</Text>
                                        <Text className={cx('product-price')}>100.000</Text>
                                        <Text className={cx('product-price-currency no-space')}>đ</Text>
                                    </div>
                                </div>
                                <Button className={cx('cart-cancel')} href="#">
                                    <Image className={cx('img')} src={images.close} />
                                </Button>
                            </li>
                            <li className={cx('cart-item')}>
                                <Button href="#" className={cx('cart-logo')}>
                                    <Image
                                        className={cx('cart-img')}
                                        src="https://firebasestorage.googleapis.com/v0/b/ban-hang-a8c40.appspot.com/o/img%2Fao-so-mi-mende-logo-ss2%2F1-1.jpeg?alt=media&token=e27441af-7b93-4dd3-921e-3a012e027a25"
                                        alt=""
                                    />
                                </Button>
                                <div className={cx('cart-info')}>
                                    <Button className={cx('cart-title')} href="#">
                                        Áo Thun XXME THÊU LOGO Mymo
                                    </Button>
                                    <div className={cx('product-price-wrap')}>
                                        <Text className={cx('product-qnt')}>1</Text>
                                        <Text className={cx('product-mul')}>x</Text>
                                        <Text className={cx('product-price')}>100.000</Text>
                                        <Text className={cx('product-price-currency no-space')}>đ</Text>
                                    </div>
                                </div>
                                <Button className={cx('cart-cancel')} href="#">
                                    <Image className={cx('img')} src={images.close} />
                                </Button>
                            </li>
                            <div className={cx('cart-subtotal')}>
                                <Text className={cx('subtotal__label')}>Subtotal:</Text>
                                <div className={cx('subtotal__prices')}>
                                    <Text className={cx('subtotal__prices-price')}>100.000</Text>
                                    <Text className={cx('subtotal__prices-currency no-space')}>đ</Text>
                                </div>
                            </div>
                            <div className={cx('cart-option')}>
                                <div className={cx('cart-btn')}>
                                    <div className={cx('cart-view-cart')}>
                                        <Text className={cx('cart-view-cart-label')}>view cart</Text>
                                    </div>
                                </div>
                                <div className={cx('cart-btn')}>
                                    <div className={cx('cart-check-out')}>
                                        <Text className={cx('cart-check-out-label')}>checkout</Text>
                                    </div>
                                </div>
                            </div>
                        </ul>
                        {/* <div className={cx('cart-no-cart')}>
                            <Text>Không có gì trong giỏ hàng</Text>
                        </div> */}
                    </div>
                )}
            >
                <div className={cx('cart')}>
                    <Button className={cx('cart-show')}>
                        <Text className={cx('cart-price-sum')}>100.000</Text>
                        <Text className={cx('cart-price-currency')}>đ</Text>
                        <div className={cx('cart-cart')}>
                            <Image className={cx('img')} src={images.cart} />
                        </div>
                        {/* <!-- cart--have-cart : Có đồ trong giỏ hàng không --> */}
                        <div className={cx('cart-qnt-cart')}>
                            <Text className={cx('cart-qnt-cart-num')}>20</Text>
                        </div>
                    </Button>
                </div>
            </HeadlessTippy>
        </>
    );
}

export default Cart;
