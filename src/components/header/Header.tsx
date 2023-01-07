import HeaderContact from './HeaderContact';
import styles from 'styles/Header.module.scss'
import classNames from 'classnames/bind';
import HeaderWithSearch from './HeaderWithSearch';
import HeaderBottom from './HeaderBottom';

const cx = classNames.bind(styles)

const Header = () => {
  return (
    <div className={cx('header-wrapper')}>
        <HeaderContact />
        <HeaderWithSearch />
        <HeaderBottom />
    </div>
  );
};

export default Header;
