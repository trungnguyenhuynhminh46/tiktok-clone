import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const AccountItem = () => {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://images.unsplash.com/photo-1663996806932-357eddab9b50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
                alt=""
                className={cx('thumb')}
            />
            <div className={cx('info')}>
                <div className={cx('name')}>
                    <span>datvilla94</span>
                    <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                </div>
                <div className={cx('more')}>Đạt villa</div>
            </div>
        </div>
    );
};

export default AccountItem;
