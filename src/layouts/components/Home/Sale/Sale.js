import React from 'react';

import styles from "./Sale.module.scss"

import classNames from 'classnames/bind';
import Button from '~/components/Button';
import Text from '~/components/Text';

const cx = classNames.bind(styles);

function Sale() {
    return (
        <>
            <div className={cx("sale")}>
                    <div className={cx("sale-items","grid__row","distance-40")}>
                        <div className={cx("grid__column-2-3")}>
                            <Button to="/products" className={cx("sale-item")}>
                                <div className={cx("sale-item-img","fix-img-half","height-img-2-3")} style={{backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/ban-hang-a8c40.appspot.com/o/img%2Fbobui-drunk%2F1-17.jpeg?alt=media&token=60689573-7bb5-4551-9d09-a7bd270e7530')"}}></div>
                                <div className={cx("sale-item-shock")}>
                                    <div className={cx("sale-item-title--shock")}>
                                        <h5 className={cx("sale-item-label--shock")}>Khuyến Mãi Shock</h5>
                                        <Button className={cx("btn-circle","sale-item-buy","sale-item-buy--shock")}>Nhận Ngay</Button>
                                    </div>
                                </div>
                            </Button>
                        </div>
                        <div className={cx("grid__column-3")}>
                            <Button to="/products" className={cx("sale-item")}>
                                <div className={cx("sale-item-img","fix-img-full","height-img-2-3")} style={{backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/ban-hang-a8c40.appspot.com/o/img%2Fao-so-mi-mende-logo-ss2%2F1-1.jpeg?alt=media&token=e27441af-7b93-4dd3-921e-3a012e027a25')"}}></div>
                                <div className={cx("sale-item-title")}>
                                    <h5 className={cx("sale-item-label")}>Áo Sơ Mi</h5>
                                    <Text className={cx("sale-item-describe")}>Vừa đẹp vừa rẻ</Text>
                                    <Button className={cx("btn-circle","sale-item-buy")}>Mua Ngay</Button>
                                </div>
                            </Button>
                        </div>
                        <div className={cx("grid__column-3")}>
                            <Button to="/products" className={cx("sale-item")}>
                                <div className={cx("sale-item-img","fix-img-75","height-img-3")} style={{backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/ban-hang-a8c40.appspot.com/o/img%2Fao-so-mi-mende-logo-ss2%2F1-1.jpeg?alt=media&token=e27441af-7b93-4dd3-921e-3a012e027a25')"}}></div>
                                <div className={cx("sale-item-title")}>
                                    <h5 className={cx("sale-item-label")}>Áo Sơ Mi</h5>
                                    <Text className={cx("sale-item-describe")}>Vừa đẹp vừa rẻ</Text>
                                    <Button className={cx("btn-circle","sale-item-buy")}>Mua Ngay</Button>
                                </div>
                            </Button>
                        </div>
                        <div className={cx("grid__column-3")}>
                            <Button to="/products" className={cx("sale-item")}>
                                <div className={cx("sale-item-img","fix-img-75","height-img-3")} style={{backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/ban-hang-a8c40.appspot.com/o/img%2Fao-so-mi-mende-logo-ss2%2F1-1.jpeg?alt=media&token=e27441af-7b93-4dd3-921e-3a012e027a25')"}}></div>
                                <div className={cx("sale-item-title")}>
                                    <h5 className={cx("sale-item-label")}>Áo Sơ Mi</h5>
                                    <Text className={cx("sale-item-describe")}>Vừa đẹp vừa rẻ</Text>
                                    <Button className={cx("btn-circle","sale-item-buy")}>Mua Ngay</Button>
                                </div>
                            </Button>
                        </div>
                        <div className={cx("grid__column-3")}>
                            <Button to="/products" className={cx("sale-item")}>
                                <div className={cx("sale-item-img","fix-img-75","height-img-3")} style={{backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/ban-hang-a8c40.appspot.com/o/img%2Fao-so-mi-mende-logo-ss2%2F1-1.jpeg?alt=media&token=e27441af-7b93-4dd3-921e-3a012e027a25')"}}></div>
                                <div className={cx("sale-item-title")}>
                                    <h5 className={cx("sale-item-label")}>Áo Sơ Mi</h5>
                                    <Text className={cx("sale-item-describe")}>Vừa đẹp vừa rẻ</Text>
                                    <Button className={cx("btn-circle","sale-item-buy")}>Mua Ngay</Button>
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>
        </>
    );
}

export default Sale;
