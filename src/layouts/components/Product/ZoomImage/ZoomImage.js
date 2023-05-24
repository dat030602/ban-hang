import React from 'react';

import styles from '../ZoomImage.module.scss';

import classNames from 'classnames/bind';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function ZoomImage({ key, className, src, alt = '', onClick, ...props }) {
    return (
        <div className={cx('zoom-img', className)} onClick={onClick} {...props}>
            <Image src={src} alt={alt} className={cx('zoom-img__content')} />
        </div>
    );
}

export default ZoomImage;
