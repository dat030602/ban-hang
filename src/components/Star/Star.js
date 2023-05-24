import React from 'react';

import styles from './Star.module.scss';

import classNames from 'classnames/bind';

import { StarIcon } from '../Icons';

const cx = classNames.bind(styles);

function Star({ amount = 0 }) {
    var indents = [];

    for (let index = 0; index < amount; index++) {
        indents.push(<StarIcon key={index} className={cx('img','yellow')}  />);
    }

    const whiteStar = 5 - amount;

    for (let index = 0; index < whiteStar; index++) {
        indents.push(<StarIcon key={index + 5} className={cx('img','white')}  />);
    }

    return (
        <>
            <div className={cx('product-item-star')}>{indents}</div>
        </>
    );
}

export default Star;
