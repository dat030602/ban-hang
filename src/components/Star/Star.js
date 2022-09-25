import React from 'react';

import styles from './Star.module.scss';

import classNames from 'classnames/bind';

import images from '~/assets/img';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function Star({ amount = 0 }) {
    var indents = [];

    for (let index = 0; index < amount; index++) {
        indents.push(<Image className={cx('img')} src={images.starYellow} />);
    }

    const whiteStar = 5 - amount;

    for (let index = 0; index < whiteStar; index++) {
        indents.push(<Image className={cx('img')} src={images.starWhite} />);
    }

    return (
        <>
            <div className={cx('product-item-star')}>{ indents }</div>
        </>
    );
}

export default Star;
