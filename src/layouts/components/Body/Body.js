import React from 'react';

import styles from './Body.module.scss';
import GlobalStyles from '~/components/GlobalStyles/GlobalStyles.module.scss';

import classNames from 'classnames/bind';

import Sale from './Sale';
import FeatureProducts from './FeatureProducts';
import AboutShop from './AboutShop';
import Promotion from './Promotion';
import Sell from './Sell';

const cx = classNames.bind(styles);
const gx = classNames.bind(GlobalStyles);

function Body({ children }) {
    return (
        <div className={cx('distance')}>
            <div className={gx('grid')}>
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

export default Body;
