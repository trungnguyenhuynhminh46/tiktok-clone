import React from 'react';
import classNames from 'classnames/bind';
import styles from './Popper.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
const Popper = ({ children, style }) => {
    return (
        <div className={cx('wrapper')} style={style}>
            {children}
        </div>
    );
};

Popper.propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.object,
};

export default Popper;
