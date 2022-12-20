import styles from 'styles/components/Modal/ForgotPass.module.scss'
import classNames from 'classnames/bind';
import ModalResetPassword from './ModalResetPassword';

const cx = classNames.bind(styles)

interface Props {
  onClick?: () => void
}

const ForgotPass: React.FC<Props> = ({ onClick }) => {
  return (
     <>
        <div className={cx('forgot')} onClick={onClick}>
          Quên mật khẩu
        </div>
     </>
  );
}

export default ForgotPass;
