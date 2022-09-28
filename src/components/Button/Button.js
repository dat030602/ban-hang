import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    disable = false,
    focus = false,
    styleClothes = false,
    children,
    className,
    onClick,
    ...passProps
}) {
    let Comp = 'button';

    const ref = useRef();

    const props = {
        ...passProps,
    };
    var handleClick;
    if (!onClick) {
        handleClick = () => {
            if (styleClothes) {
                if (focus === false) {
                    focus = true;
                    ref.current.style.border = '2px solid var(--black-color)';
                } else {
                    focus = false;
                    ref.current.style.border = '1px solid #ccc';
                }
            }
        };
    } else {
        handleClick = onClick;
    }

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
        <Comp ref={ref} className={classes} onClick={handleClick} {...props}>
            {children}
        </Comp>
    );
}

export default Button;
