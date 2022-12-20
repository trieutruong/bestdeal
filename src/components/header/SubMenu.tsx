import styles from 'styles/components/SubMenu/SubMenu.module.scss'
import classNames from 'classnames/bind';
import Link from 'next/link';

const cx = classNames.bind(styles)

const Submenu = () => {
  return (
    <div className={cx('submenu')}>
        <div className={cx('submenu__group-buttons')}>
            <a href="" className={cx('btn group-buttons-link')}></a>
            <a href="" className={cx('btn group-buttons-link')}></a>
            <a href="" className={cx('btn group-buttons-link')}></a>
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
