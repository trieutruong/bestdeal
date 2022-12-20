import styles from 'styles/HeaderContact.module.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)

const HeaderContact = () => {
    return (
        <div className={cx('wrapper')}>
            <FontAwesomeIcon icon={faPhone} />
            <span>0346505377</span>
        </div>
    )
}

export default HeaderContact