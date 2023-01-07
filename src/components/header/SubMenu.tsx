import styles from 'styles/components/SubMenu/SubMenu.module.scss'
import classNames from 'classnames/bind';
import Link from 'next/link';
import Button from '../button/Button';

const cx = classNames.bind(styles)

const Submenu = () => {
  return (
    <div className={cx('submenu')}>
        <div className={cx('submenu__group-buttons')}>
            <ul className={cx('submenu__group-buttons-list')}>
                <li>
                    <Button className={cx('btn')}>
                        Nổi bật
                    </Button>
                </li>
                <li>
                    <Button className={cx('btn')}>
                        Bán chạy
                    </Button>
                </li>
                <li>
                    <Button className={cx('btn')}>
                        Hàng mới
                    </Button>
                </li>
            </ul>
        </div>
        <ul className={cx('submenu__group-sub-list')}>
            <li className={cx('submenu__group-sub-item')}>
                <Link className={cx('"submenu__group-sub-item-link')} href="">
                    
                </Link>
            </li>
            <li className={cx('submenu__group-sub-item')}>
                <Link className={cx('"submenu__group-sub-item-link')} href="">
                    
                </Link>
            </li>
            <li className={cx('submenu__group-sub-item')}>
                <Link className={cx('"submenu__group-sub-item-link')} href="">
                    
                </Link>
            </li>
            <li className={cx('submenu__group-sub-item')}>
                <Link className={cx('"submenu__group-sub-item-link')} href="">
                    
                </Link>
            </li>
            <li className={cx('submenu__group-sub-item')}>
                <Link className={cx('"submenu__group-sub-item-link')} href="">
                    
                </Link>
            </li>
            <li className={cx('submenu__group-sub-item')}>
                <Link className={cx('"submenu__group-sub-item-link')} href="">
                    
                </Link>
            </li>
        </ul>
    </div>
  );
};

export default Submenu;
