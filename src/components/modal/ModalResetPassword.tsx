import styles from 'styles/components/Modal/ModalSignIn.module.scss'
import classNames from 'classnames/bind';
import { CloseIcon } from '../Icons';
import Input from './Input';
import Button from '../button/Button';

const cx = classNames.bind(styles)

interface Props {
  openModal?: any
}

const ModalResetPassword : React.FC<Props> = ({ openModal }) => {
    return (
        <div className={cx('modal')}>
        <div className={cx('modal__overlay')}>
        
        </div>
        <div className={cx('modal__body')}>
            <div className={cx('header')}>
              <span className={cx('heading')}>ĐẶT LẠI MẬT KHẨU</span>
              <div className={cx('close-btn')} onClick={() => openModal('')}>
                <CloseIcon className={cx('icon')} width="12px" height="12px"/>
              </div>
            </div>
            <div className={cx('body')}>
              <form method="POST" action="/">
                <div className={cx('form-control')}>
                    <Input type="email" placeholder="Email/SĐT"/>
                </div>
                <Button className={cx('btn')} primary>
                    Gửi mã
                </Button>
              </form>
            </div>
        </div>
    </div>
    )
}

export default ModalResetPassword