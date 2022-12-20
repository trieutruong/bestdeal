import styles from 'styles/HeaderWithSearch.module.scss'
import classNames from 'classnames/bind';
import HeaderLogo from './HeaderLogo';
import { faOpencart } from '@fortawesome/free-brands-svg-icons';
import SignIn from './SignIn';
import Menu from './Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faPhone, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Link from 'next/link';
import Search from './Search';

const cx = classNames.bind(styles)

const HeaderWithSearch = () => {
    const [show, setShow] = useState(false)

    return (
        <div className={cx('header-with-search')}>
                <div className={cx('header-with-search-inner') + ' grid wide'}>
                    <HeaderLogo />
                    <div className={cx('header-search')}>
                        <button className={cx('header__search-select')} onClick={() => setShow(!show)}>
                            Tất cả
                            <FontAwesomeIcon icon={faChevronDown} className={cx('header__search-select-icon')}/>
                        </button>
                        {show ? <Menu /> : ''}
                        <Search />
                        <button className={cx('header__search-btn')}>
                            <FontAwesomeIcon icon={faSearch} className={cx('search-icon')}/>
                        </button>
                    </div>
                    <div className={cx('header__right')}>
                        <div className={cx('header__right-item')}>
                            <span>Hệ thống</span>
                            <h3 className={cx('header-right-item__store')}>01 cửa hàng
                                <i className="header-right-item__store-icon fa-solid fa-sort-down"></i>
                            </h3>
                        </div>
                        <SignIn />
                        <Link className={cx('header__right-item', 'header__right-item--cart')} href="/checkout">
                            <span>0346505377</span>
                        </Link>
                    </div>
                </div>
        </div>
    )
}

export default HeaderWithSearch