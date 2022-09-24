import styles from './Header.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('header')}>
            <div className={cx('container')}>
                <a href="" className={cx('logo')}>
                    TikTok
                </a>
                <div className={cx('form')}>
                    <input type="text" placeholder="Searcg accounts and videos" />
                    <button>Search</button>
                </div>
                <div className={cx('options')}>
                    <div className={cx('option', 'upload')}>
                        <button>Upload</button>
                    </div>
                    <div className={cx('option')}>
                        <a href="">item</a>
                    </div>
                    <div className={cx('option')}>
                        <a href="">item</a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
