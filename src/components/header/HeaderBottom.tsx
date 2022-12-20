import styles from 'styles/HeaderBottom.module.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Category from './Category';

const cx = classNames.bind(styles)

const HeaderBottom = () => {
  return (
    <div className={cx('header__nav')}>
        <div className={cx('header__nav-wrap')}>
            <div className={cx('header__nav-menu')}>
                <FontAwesomeIcon icon={faBars} className={cx('icon')}/>
                Danh mục sản phẩm
            </div>
            <Category />
            <ul className={cx('header__nav-list')}>
                <li className={cx('header__nav-list-item')}>
                    <Link className={cx('header__nav-list-item-link')} href='/introduce/introduce'>
                        GIỚI THIỆU
                    </Link>
                </li>
                <li className={cx('header__nav-list-item')}>
                    <Link className={cx('header__nav-list-item-link')} href="/brand/brand">
                        THƯƠNG HIỆU
                    </Link>
                </li>
                <li className={cx('header__nav-list-item')}>
                    <Link className={cx('header__nav-list-item-link')} href="/promotion/promotion">
                        KHUYẾN MÃI
                    </Link>
                </li>
                <li className={cx('header__nav-list-item')}>
                    <Link className={cx('header__nav-list-item-link')} href="/newsproduct/newsproduct">
                        HÀNG MỚI VỀ
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  );
};

export default HeaderBottom;
