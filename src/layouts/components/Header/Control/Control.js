import React from 'react';
import 'tippy.js/dist/tippy.css';

import styles from './Control.module.scss';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Control({ children }) {
    return (
        <>
          <div className={cx("control")}>
                <div className={cx("grid")}>
                    <div className={cx("control--flex")}>
                        <div className={cx("control-link")}>
                            <Button href="#" className={cx("control-label","control-label", "control--active")}>Trang chủ</Button>
                            <Button href="#" className={cx("control-label","control-t-shirt")}>Áo thun</Button>
                            <Button href="#" className={cx("control-label","control-shirt")}>Áo sơ mi</Button>
                            <Button href="#" className={cx("control-label","control-jacket")}>Áo khoác</Button>
                            <Button href="#" className={cx("control-label","control-home-page")}>Balo</Button>
                            <Button href="#" className={cx("control-label","control-home-page")}>Thẻ thông minh</Button>
                        </div>
                        <div className={cx("control-contact")}>
                            <Image src="./assets/img/contact/contact.png" alt="" className={cx("control-contact-img")}/>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    );
}

export default Control;
