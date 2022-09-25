import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass,
    faCircleXmark,
    faSpinner,
    faEllipsisVertical,
    faPlus,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
// Assets
import images from '~/assets/images';
import { useEffect, useState } from 'react';
// Components
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
const cx = classNames.bind(styles);
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0);
    }, []);
    return (
        <header className={cx('header')}>
            <div className={cx('container')}>
                <a href="/" className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </a>
                <Tippy
                    visible={searchResult.length > 0}
                    interactive
                    placement="bottom"
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('title')}>Tài khoản</h4>
                                <AccountItem></AccountItem>
                                <AccountItem></AccountItem>
                                <AccountItem></AccountItem>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('form')}>
                        <input type="text" placeholder="Search accounts and videos" />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                        </button>
                        <FontAwesomeIcon icon={faSpinner} className={cx('loading')}></FontAwesomeIcon>
                        <span className={cx('spliter')}></span>
                        <button className={cx('search')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                        </button>
                    </div>
                </Tippy>
                <div className={cx('options')}>
                    <div className={cx('option', 'upload')}>
                        <Button outline to="/upload" className="space-around">
                            <FontAwesomeIcon icon={faPlus} style={{ width: 18, height: 18 }}></FontAwesomeIcon>
                            Upload
                        </Button>
                    </div>
                    <div className={cx('option')}>
                        <Button fill primary to="/login">
                            Log in
                        </Button>
                    </div>
                    <div className={cx('option')}>
                        <Button justIcon>
                            <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
