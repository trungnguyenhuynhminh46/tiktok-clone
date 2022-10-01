// Library
import React from 'react';
import { useEffect, useState } from 'react';
import TippyHeadLess from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
// Assets
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';
import * as services from '~/services';
// Components
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { IconMagnifyingGlass, IconCircleXmark, IconSpinner } from '~/components/Icons/header';
import { useRef } from 'react';
const cx = classNames.bind(styles);
const Search = () => {
    // React Hooks
    const textInputRef = useRef();
    const [textSearch, setTextSearch] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [textInputIsShown, setTextInputIsShown] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    // Variables
    const debouncedTextSearch = useDebounce(textSearch, 600);
    useEffect(() => {
        if (!!debouncedTextSearch) {
            const fetchApi = async () => {
                setIsLoading(true);
                const searchResult = await services.search(debouncedTextSearch, 'less');
                setSearchResult(searchResult);
                setIsLoading(false);
            };
            fetchApi();
        } else {
            setSearchResult([]);
        }
    }, [debouncedTextSearch]);
    function handleHideResult() {
        setTextInputIsShown(false);
    }
    function handleTextChange(e) {
        if (!e.target.value.startsWith(' ')) {
            setTextSearch(e.target.value);
        }
    }
    return (
        <div>
            <TippyHeadLess
                visible={searchResult.length > 0}
                interactive
                placement="bottom"
                onClickOutside={handleHideResult}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        {textInputIsShown && searchResult.length > 0 && (
                            <PopperWrapper>
                                <h4 className={cx('title')}>Tài khoản</h4>
                                {searchResult.map((item) => {
                                    return <AccountItem key={item.id} data={item} />;
                                })}
                            </PopperWrapper>
                        )}
                    </div>
                )}
            >
                <div className={cx('form')}>
                    <input
                        ref={textInputRef}
                        value={textSearch}
                        type="text"
                        placeholder="Search accounts and videos"
                        onChange={handleTextChange}
                        onFocus={() => {
                            setTextInputIsShown(true);
                        }}
                    />
                    {!!textSearch && !isLoading && (
                        <button
                            className={cx('clear')}
                            onClick={() => {
                                setTextSearch('');
                                textInputRef.current.focus();
                                setSearchResult([]);
                            }}
                        >
                            <IconCircleXmark width="16px" height="16px"></IconCircleXmark>
                        </button>
                    )}
                    {isLoading && (
                        <IconSpinner width="16px" height="16px" className={cx('loadingSpinner')}></IconSpinner>
                    )}
                    <span className={cx('spliter')}></span>
                    <button
                        className={cx('search')}
                        onMouseDown={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <IconMagnifyingGlass width="24px" height="24px"></IconMagnifyingGlass>
                    </button>
                </div>
            </TippyHeadLess>
        </div>
    );
};

export default Search;
