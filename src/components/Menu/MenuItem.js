import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
// Assets
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
const MenuItem = ({ data, onClick }) => {
    let className = cx('menu-item', { border_top: data.border_top });
    return (
        <div className={className} onClick={onClick} to={data.to} href={data.href} style={data.style}>
            {data.icon ? data.icon : undefined}
            <span className="title">{data.title}</span>
        </div>
    );
};

MenuItem.propTypes = {
    data: PropTypes.object,
    onClick: PropTypes.func,
};

export default MenuItem;
