// Library
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
// Assets
import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
const AccountItem = ({ data }) => {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image src={data.avatar} alt="" className={cx('thumb')} />
            <div className={cx('info')}>
                <div className={cx('name')}>
                    <span>{data.nickname}</span>
                    {data.tick && <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>}
                </div>
                <div className={cx('more')}>{data.full_name}</div>
            </div>
        </Link>
    );
};

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
