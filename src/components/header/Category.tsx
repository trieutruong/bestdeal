import styles from 'styles/Category.module.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)

const Category = () => {
  return (
    <div className={cx('category')}>
        <ul className={cx('category__list')}>
            <li className={cx('category__item')}>
                <a href="" className={cx('category-item__link')}>Dụng cụ cầm tay</a>
                <FontAwesomeIcon icon={faChevronRight} className={cx('category__icon')}/>
                
            </li>
            <li className={cx('category__item')}>
                <a href="" className={cx('category-item__link')}>Dụng cụ cầm tay</a>
                <FontAwesomeIcon icon={faChevronRight} className={cx('category__icon')}/>
                </li>
            <li className={cx('category__item')}>
                <a href="" className={cx('category-item__link')}>Dụng cụ cầm tay</a>
                <FontAwesomeIcon icon={faChevronRight} className={cx('category__icon')}/>
                </li>
            <li className={cx('category__item')}>
                <a href="" className={cx('category-item__link')}>Dụng cụ cầm tay</a>
                <FontAwesomeIcon icon={faChevronRight} className={cx('category__icon')}/>
                </li>
            <li className={cx('category__item')}>
            <a href="" className={cx('category-item__link')}>Dụng cụ cầm tay</a>
            <FontAwesomeIcon icon={faChevronRight} className={cx('category__icon')}/>
                </li>
            <li className={cx('category__item')}>
            <a href="" className={cx('category-item__link')}>Dụng cụ cầm tay</a>
            <FontAwesomeIcon icon={faChevronRight} className={cx('category__icon')}/>
                </li>
            <li className={cx('category__item')}>
            <a href="" className={cx('category-item__link')}>Dụng cụ cầm tay</a>
            <FontAwesomeIcon icon={faChevronRight} className={cx('category__icon')}/>
                </li>
            <li className={cx('category__item')}>
            <a href="" className={cx('category-item__link')}>Dụng cụ cầm tay</a>
            <FontAwesomeIcon icon={faChevronRight} className={cx('category__icon')}/>
                </li>
            <li className={cx('category__item')}>
            <a href="" className={cx('category-item__link')}>Dụng cụ cầm tay</a>
            <FontAwesomeIcon icon={faChevronRight} className={cx('category__icon')}/>
                </li>
            <li className={cx('category__item')}>
                <a href="" className={cx('category-item__link')}>Thang</a>
                <FontAwesomeIcon icon={faChevronRight} className={cx('category__icon')}/>
            </li>
            <li className={cx('category__item')}>
                <a href="" className={cx('category-item__link')}>Xe đẩy hàng</a>
                <FontAwesomeIcon icon={faChevronRight} className={cx('category__icon')}/>
            </li>
        </ul>
    </div>
  );
};

export default Category;
