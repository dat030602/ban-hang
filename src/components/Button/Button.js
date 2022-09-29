import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    disable = false,
    styleClothes = false,
    children,
    className,
    ...passProps
}) {
    let Comp = 'button';

    const ref = useRef();

    const props = {
        ...passProps,
    };

    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        disable,
    });

    return (
        <Comp ref={ref} className={classes} {...props}>
            {children}
        </Comp>
    );
}

export default Button;
