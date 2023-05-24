import React from 'react';

import styles from './Home.module.scss';

import classNames from 'classnames/bind';

import Sale from './Sale';
import FeatureProducts from './FeatureProducts';
import AboutShop from './AboutShop';
import Promotion from './Promotion';
import Sell from './Sell';

const cx = classNames.bind(styles);

function Home({ children }) {
    return (
        <div className={cx('distance')}>
            <div className={cx('grid')}>
                <Sale />
                <FeatureProducts />
                <AboutShop />
                <Promotion />
                <FeatureProducts />
                <Sell />
            </div>
        </div>
    );
}

export default Home;
