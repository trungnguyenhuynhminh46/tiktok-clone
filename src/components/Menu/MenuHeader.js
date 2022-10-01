// Library
import React from 'react';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
// Assets
import styles from './Menu.module.scss';
// Components

const cx = classNames.bind(styles);
const MenuHeader = ({ title, onClick }) => {
    return (
        <header className={cx('header')}>
            <div className={cx('back')} onClick={onClick}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div className={cx('title')}>
                <span>{title}</span>
            </div>
        </header>
    );
};

MenuHeader.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func,
};

export default MenuHeader;
