import React from 'react';

import styles from './ZoomImage.module.scss';

import classNames from 'classnames/bind';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function ZoomImage({ key, className, src, alt, ...props }) {
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    const handleOnclick = () => {
        var modalZoomClickImg = document.querySelector('.' + cx('zoom-img__content'));
        modalZoomClickImg.className += ' ' + cx('out');
        setTimeout(function () {
            var close = document.querySelector('.' + cx('zoom-img'));
            modalZoomClickImg.className = cx('zoom-img__content');
            close.className = cx('zoom-img', 'close');
        }, 400);
    };

    return (
        <div className={cx('zoom-img', className)} onClick={handleOnclick} {...props}>
            <Image src={src} alt="" className={cx('zoom-img__content')} />
        </div>
    );
}

export default ZoomImage;
