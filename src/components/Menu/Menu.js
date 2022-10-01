import React, { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
// Components
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import MenuHeader from './MenuHeader';

const cx = classNames.bind(styles);
const Menu = ({ children, items, hideOnClick = false }) => {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    function handleBackMenu() {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    }
    function handleParentClick(item) {
        setHistory((prev) => [...prev, item.children]);
    }
    function handleChildrenClick(item) {
        console.log(item);
    }
    function resetMenu() {
        setHistory((prev) => prev.slice(0, 1));
    }
    const renderMenuTabs = () => {
        return current.data.map((item, index) => {
            let isParent = !!item.children;
            return (
                <MenuItem
                    data={item}
                    key={index}
                    onClick={() => {
                        if (isParent) {
                            handleParentClick(item);
                        } else {
                            handleChildrenClick(item);
                        }
                    }}
                ></MenuItem>
            );
        });
    };
    const renderResult = (attrs) => (
        <div className={cx('menu')} tabIndex="-1" {...attrs}>
            <PopperWrapper style={history.length === 1 ? { paddingBottom: 8 } : {}}>
                {history.length > 1 && !!current.title ? (
                    <>
                        <MenuHeader title={current.title} onClick={handleBackMenu}></MenuHeader>
                        <div className={cx('spacer')}></div>
                    </>
                ) : undefined}
                <div className={cx('menu-items-wrapper')}>{renderMenuTabs()}</div>
            </PopperWrapper>
        </div>
    );
    return (
        <Tippy
            interactive
            offset={[12, 16]}
            delay={[0, 700]}
            placement="bottom-end"
            onHidden={resetMenu}
            hideOnClick={hideOnClick}
            render={renderResult}
        >
            {children}
        </Tippy>
    );
};

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.func,
};

export default Menu;
