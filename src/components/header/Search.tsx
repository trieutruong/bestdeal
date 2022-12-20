import styles from 'styles/components/Search/Search.module.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)

const Search = () => {
    return (
        <>
            <input type="text" className={cx('header__search-input')} placeholder="Tìm sản phẩm bạn mong muốn..." />
        </>
    )
}

export default Search