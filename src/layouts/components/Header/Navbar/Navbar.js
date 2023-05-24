import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Image from '~/components/Image';
import Button from '~/components/Button';
import Text from '~/components/Text';
import images from '~/assets/img';

import styles from './Navbar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Navbar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid')}>
                <nav className={cx('contact')}>
                    <div className={cx('contact-support-over')}>
                        <Text className={cx('contact-support')}>HỖ TRỢ CHĂM SÓC KHÁCH HÀNG - </Text>
                        <Text className={cx('contact-support')}>0348590300 NHÉ !</Text>
                    </div>
                    <ul className={cx('contact-list')}>
                        <Tippy delay={[0, 200]} content="Follow on Facebook" placement="bottom">
                            <li className={cx('contact-item')}>
                                <Button
                                    href="https://www.facebook.com/akira362/"
                                    className={cx('contact-item-link')}
                                >
                                    <Image className={cx('icon')} src={images.facebook} alt="" />
                                </Button>
                            </li>
                        </Tippy>
                        <Tippy delay={[0, 200]} content="Follow on Instagram" placement="bottom">
                            <li className={cx('contact-item')}>
                                <Button
                                    href="https://www.instagram.com/akiraakira8284/"
                                    className={cx('contact-item-link')}
                                >
                                    <Image className={cx('icon')} src={images.instagram} alt="" />
                                </Button>
                            </li>
                        </Tippy>
                        <Tippy delay={[0, 200]} content="Follow on twitter" placement="bottom">
                            <li className={cx('contact-item')}>
                                <Button to="#" className={cx('contact-item-link')}>
                                    <Image className={cx('icon')} src={images.twitter} alt="" />
                                </Button>
                            </li>
                        </Tippy>
                        <Tippy delay={[0, 200]} content="Send us an email" placement="bottom">
                            <li className={cx('contact-item')}>
                                <Button to="#" className={cx('contact-item-link')}>
                                    <Image className={cx('icon')} src={images.mail} alt="" />
                                </Button>
                            </li>
                        </Tippy>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
