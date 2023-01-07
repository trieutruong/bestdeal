import styles from 'styles/HeaderLogo.module.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Image from 'next/image';

const cx = classNames.bind(styles)

const HeaderLogo = () => {
    return (
        <div className={cx('header-logo')}>
            <Link href="/" className={cx('header__left-link')}>
                <img src="/img/logo_cocoshop.svg" alt="logo" className={cx('logo')}/>
            </Link>
        </div>
    )
}

export default HeaderLogo