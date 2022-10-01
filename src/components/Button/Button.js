import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
const Button = ({
    style,
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
        <Component className={classes} {...props} style={style}>
            {children}
        </Component>
    );
};

Button.propTypes = {
    style: PropTypes.object,
    to: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node,
    fill: PropTypes.bool,
    outline: PropTypes.bool,
    primary: PropTypes.bool,
    justIcon: PropTypes.bool,
    small: PropTypes.bool,
    medium: PropTypes.bool,
    large: PropTypes.bool,
    disabled: PropTypes.bool,
    rounded: PropTypes.bool,
    simple: PropTypes.bool,
    className: PropTypes.string,
};
export default Button;
