import React from 'react';

import styles from './AboutShop.module.scss';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function AboutShop() {
    return (
        <>
            <div className={cx('wrapper', 'distance-56')}>
                <div className={cx('grid__row', 'distance-32')}>
                    <div className={cx('description')}>
                        <div
                            className={cx('description-img', 'grid__column-2', 'height-img-2-3')}
                            style={{
                                backgroundImage:
                                    "url('https://dosi-in.com/file/detailed/392/dosiin-mende-mende-logo-vshirt-trangao-so-mi-nam-tay-ngan-392745392745.jpg?w=1000&h=1000&fit=fill&fm=webp')",
                            }}
                        ></div>
                        <div className={cx('description-content', 'grid__column-2-3')}>
                            <h3 className={cx('description-title')}>NTSTORE.VN - Cửa hàng thời trang giá tốt</h3>
                            <div className={cx('description-note')}>
                                <p>Sản phẩm đa dạng đáp ứng mọi nhu cầu của bạn</p>
                                <p>
                                    Khuyến mãi trên từng sản phẩm mong muốn mang đến chất lượng tốt nhất cho khách hàng.
                                </p>
                                <p>Giao hàng nhanh - Đủ size - Đủ màu - Nhiều mẫu mới</p>
                            </div>
                            <div className={cx('description-more')}>
                                <button className={cx('btn-circle')}>TÌM HIỂU THÊM..</button>
                            </div>
                        </div>
                    </div>
                    <div className={cx('services')}>
                        <h5 className={cx('services-label')}>Miễn Phí Ship từ 200k</h5>
                        <h5 className={cx('services-label')}>Hỗ Trợ Chăm Sóc Khách Hàng</h5>
                        <h5 className={cx('services-label')}>14 ngày đổi trả sản phẩm lỗi</h5>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutShop;
