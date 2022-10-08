// Library
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { Link } from 'react-router-dom';
// Assets
import images from '~/assets/images';
import styles from './Header.module.scss';
import {
    IconPaperPlane,
    IconMessages,
    IconUser,
    IconTiktokCircle,
    IconLanguages,
    IconQuestion,
    IconKeyboardCircle,
    IconGear,
    IconLogout,
} from '~/components/Icons/header';
import config from '~/config';
// Components
import Button from '~/components/Button';
import Menu from '~/components/Menu';
import Image from '~/components/Image';
import Search from '~/components/Search';
const cx = classNames.bind(styles);
const currentUser = true;
const MenuItems = [
    {
        icon: <IconLanguages width="20px" height="20px" />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                    style: {
                        padding: '10px 24px',
                        fontFamily: 'var(--secondary-font-family)',
                        fontSize: '14px',
                        fontWeight: '400',
                        lineHeight: '20px',
                    },
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                    style: {
                        padding: '10px 24px',
                        fontFamily: 'var(--secondary-font-family)',
                        fontSize: '14px',
                        fontWeight: '400',
                        lineHeight: '20px',
                    },
                },
            ],
        },
    },
    {
        icon: <IconQuestion width="20px" height="20px"></IconQuestion>,
        title: 'Feedback and help',
    },
    {
        icon: <IconKeyboardCircle width="20px" height="20px"></IconKeyboardCircle>,
        title: 'Keyboard keyshort',
    },
];
const UserItems = [
    {
        icon: <IconUser width="20px" height="20px"></IconUser>,
        title: 'View profile',
        to: '/profile',
    },
    {
        icon: <IconTiktokCircle width="20px" height="20px"></IconTiktokCircle>,
        title: 'Get coins',
        to: '/coins',
    },
    {
        icon: <IconGear width="20px" height="20px"></IconGear>,
        title: 'Settings',
        to: '/settings',
    },
    ...MenuItems,
    {
        icon: <IconLogout width="20px" height="20px"></IconLogout>,
        title: 'Logout',
        to: '/logout',
        border_top: true,
    },
];
function Header() {
    return (
        <header className={cx('header')}>
            <div className={cx('container')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>
                {/* Search */}
                <Search></Search>
                {/* End Search */}
                <div className={cx('options')}>
                    <div className={cx('option', 'upload')}>
                        <Button
                            outline
                            to="/upload"
                            className="space-around"
                            style={{ width: 113, padding: '5px 12px' }}
                        >
                            <FontAwesomeIcon icon={faPlus} style={{ width: 17, height: 17 }}></FontAwesomeIcon>
                            Upload
                        </Button>
                    </div>
                    {!!currentUser ? (
                        <>
                            <Tippy content="Messages" delay={[0, 100]}>
                                <div className={cx('option')}>
                                    <Button justIcon style={{ padding: '0 3px' }} to="/messages">
                                        <IconPaperPlane width="26px" height="26px" />
                                    </Button>
                                </div>
                            </Tippy>
                            <Tippy content="Inbox" delay={[0, 100]}>
                                <div className={cx('option')}>
                                    <Button justIcon to="/inbox">
                                        <IconMessages width="32px" height="32px" />
                                    </Button>
                                </div>
                            </Tippy>
                            <Menu items={UserItems}>
                                <div className={cx('option', 'user')}>
                                    <div className={cx('user-thumb')}>
                                        <Image
                                            src="https://images.unsplash.com/photo-1664136709608-32f4a7b56ba8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                            alt=""
                                            fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                                        />
                                    </div>
                                </div>
                            </Menu>
                        </>
                    ) : (
                        <>
                            <div className={cx('option')}>
                                <Button fill primary to="/login">
                                    Log in
                                </Button>
                            </div>
                            <Menu items={MenuItems}>
                                <div className={cx('option')}>
                                    <Button justIcon>
                                        <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                                    </Button>
                                </div>
                            </Menu>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
