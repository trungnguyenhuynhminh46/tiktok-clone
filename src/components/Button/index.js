import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
const Button = ({
    to,
    href,
    onClick,
    children,
    fill,
    outline,
    primary,
    justIcon,
    small,
    medium,
    large,
    disabled,
    rounded,
    simple,
    className,
    ...remainProps
}) => {
    let Component = 'button';
    let props = {
        onClick,
        ...remainProps,
    };
    if (to) {
        Component = Link;
        props.to = to;
    }
    if (href) {
        Component = 'a';
        props.href = href;
    }
    if (disabled) {
        Object.keys(remainProps).forEach((key) => {
            if (key.startsWith('on') && typeof remainProps[key] === 'function') {
                delete props[key];
            }
        });
        delete props.href;
        delete props.to;
    }
    let classes = cx(
        'wrapper',
        { fill, outline, primary, justIcon, small, medium, large, disabled, rounded, simple },
        className,
    );
    return (
        <Component className={classes} {...props}>
            {children}
        </Component>
    );
};

export default Button;
