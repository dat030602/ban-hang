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
                            <Button href="#" className={cx("sale-item")}>
                                <div className={cx("sale-item-img","fix-img-half","height-img-2-3")} style={{backgroundImage: "url('https://dosi-in.com/file/detailed/392/dosiin-mende-mende-logo-vshirt-trangao-so-mi-nam-tay-ngan-392745392745.jpg?w=1000&h=1000&fit=fill&fm=webp')"}}></div>
                                <div className={cx("sale-item-shock")}>
                                    <div className={cx("sale-item-title--shock")}>
                                        <h5 className={cx("sale-item-label--shock")}>Khuyến Mãi Shock</h5>
                                        <Button className={cx("btn-circle","sale-item-buy","sale-item-buy--shock")}>Nhận Ngay</Button>
                                    </div>
                                </div>
                            </Button>
                        </div>
                        <div className={cx("grid__column-3")}>
                            <Button href="#" className={cx("sale-item")}>
                                <div className={cx("sale-item-img","fix-img-full","height-img-2-3")} style={{backgroundImage: "url('https://dosi-in.com/file/detailed/392/dosiin-mende-mende-logo-vshirt-trangao-so-mi-nam-tay-ngan-392745392745.jpg?w=1000&h=1000&fit=fill&fm=webp')"}}></div>
                                <div className={cx("sale-item-title")}>
                                    <h5 className={cx("sale-item-label")}>Áo Sơ Mi</h5>
                                    <Text className={cx("sale-item-describe")}>Vừa đẹp vừa rẻ</Text>
                                    <Button className={cx("btn-circle","sale-item-buy")}>Mua Ngay</Button>
                                </div>
                            </Button>
                        </div>
                        <div className={cx("grid__column-3")}>
                            <Button href="#" className={cx("sale-item")}>
                                <div className={cx("sale-item-img","fix-img-75","height-img-3")} style={{backgroundImage: "url('https://dosi-in.com/file/detailed/392/dosiin-mende-mende-logo-vshirt-trangao-so-mi-nam-tay-ngan-392745392745.jpg?w=1000&h=1000&fit=fill&fm=webp')"}}></div>
                                <div className={cx("sale-item-title")}>
                                    <h5 className={cx("sale-item-label")}>Áo Sơ Mi</h5>
                                    <Text className={cx("sale-item-describe")}>Vừa đẹp vừa rẻ</Text>
                                    <Button className={cx("btn-circle","sale-item-buy")}>Mua Ngay</Button>
                                </div>
                            </Button>
                        </div>
                        <div className={cx("grid__column-3")}>
                            <Button href="#" className={cx("sale-item")}>
                                <div className={cx("sale-item-img","fix-img-75","height-img-3")} style={{backgroundImage: "url('https://dosi-in.com/file/detailed/392/dosiin-mende-mende-logo-vshirt-trangao-so-mi-nam-tay-ngan-392745392745.jpg?w=1000&h=1000&fit=fill&fm=webp')"}}></div>
                                <div className={cx("sale-item-title")}>
                                    <h5 className={cx("sale-item-label")}>Áo Sơ Mi</h5>
                                    <Text className={cx("sale-item-describe")}>Vừa đẹp vừa rẻ</Text>
                                    <Button className={cx("btn-circle","sale-item-buy")}>Mua Ngay</Button>
                                </div>
                            </Button>
                        </div>
                        <div className={cx("grid__column-3")}>
                            <Button href="#" className={cx("sale-item")}>
                                <div className={cx("sale-item-img","fix-img-75","height-img-3")} style={{backgroundImage: "url('https://dosi-in.com/file/detailed/392/dosiin-mende-mende-logo-vshirt-trangao-so-mi-nam-tay-ngan-392745392745.jpg?w=1000&h=1000&fit=fill&fm=webp')"}}></div>
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
