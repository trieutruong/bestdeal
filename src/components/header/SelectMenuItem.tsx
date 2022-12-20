import styles from 'styles/components/SelectMenuItem/SelectMenuItem.module.scss'
import classNames from 'classnames/bind';
import Menu from './Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faPhone, faSearch } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)

const SelectMenuItem = () => {
    return (
        <div className={cx('header__search-select-wrapper')}>
            <button className={cx('header__search-select')}>
                Tất cả
                <FontAwesomeIcon icon={faChevronDown} className={cx('header__search-select-icon')}/>
            </button>
            <Menu />
        </div>
    )
}

export default SelectMenuItem