import styles from 'styles/HeaderWithSearch.module.scss'
import classNames from 'classnames/bind';
import ModalSignIn from '../modal/ModalSignIn';
import ModalRegister from '../modal/ModalRegister';
import { useState } from 'react';
import ModalResetPassword from '../modal/ModalResetPassword';

const cx = classNames.bind(styles)

const SignIn = () => {
  const [modal, setModal] = useState('')

  return (
   <>
      <div className={cx('header__right-item', 'header__right-item--account')}>
        <div className={cx('header__right-item__link')} onClick={() => setModal('ModalSignIn')}>Đăng nhập / </div>
        <div className={cx('header__right-item__link')} onClick={() => setModal('ModalRegister')}>Đăng ký</div>
      </div>
  
      {modal === 'ModalSignIn' ? <ModalSignIn openModal={setModal} /> : ''}
      {modal === 'ModalRegister' ? <ModalRegister openModal={setModal} /> : ''}
      {modal === 'ModalResetPassword' ? <ModalResetPassword openModal={setModal} /> : ''}
   </>
  );
}

export default SignIn;
