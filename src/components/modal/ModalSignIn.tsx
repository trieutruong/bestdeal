import styles from 'styles/components/Modal/ModalSignIn.module.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faOpencart } from '@fortawesome/free-brands-svg-icons';
import { CloseIcon } from '../Icons';
import Input from './Input';
import ForgotPass from './ForgotPass';
import Button from '../button/Button';
import ModalResetPassword from './ModalResetPassword';
import { useEffect, useState, useRef } from 'react';
import { useFormik } from 'formik';

const cx = classNames.bind(styles)

interface Props {
  openModal?: any,
  modal?: any
}

const ModalSignIn : React.FC<Props> = ({ modal, openModal }) => {
  const [email, setEmail] = useState('')
  const inputRef = useRef()

  const validate = (values : any) => {
    const errors = {
      email: '',
      password: '',
    };
    if (!values.email) {
      errors.email = 'Vui lòng nhập Email hoặc SĐT';
    } 

    if(!values.password) {
      errors.password = 'Vui lòng nhập mật khẩu'
    }

    return errors
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  })

  return (
        <div className={cx('modal')}>
            <div className={cx('modal__overlay')}>
            
            </div>
            <div className={cx('modal__body')}>
                <div className={cx('header')}>
                  <span className={cx('heading')}>ĐĂNG NHẬP</span>
                  <div className={cx('close-btn')} onClick={() => openModal('')}>
                    <CloseIcon className={cx('icon')} width="12px" height="12px"/>
                  </div>
                </div>
                <div className={cx('body')}> 
                  <form method="POST" action="/" id="form-1" onSubmit={formik.handleSubmit}>
                    <div className={cx('form-control')}>
                        <Input ref={inputRef} id="email" name="email" type="email" placeholder="Email/SĐT" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                        {formik.errors.email ? <span className={cx('message')}>{formik.errors.email}</span> : ''}
                    </div>
                    <div className={cx('form-control')}>
                        <Input ref={inputRef} id="password" name="password" type="password" placeholder="Mật khẩu" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/> 
                        {formik.errors.password ? <span className={cx('message')}>{formik.errors.password}</span> : ''}
                    </div>
                    <div className={cx('remember')}>
                      <div className={cx('remember-pass')}>
                        {/* <Input  type="checkbox" className={cx('checkbox')}/> */}
                        <span className={cx('forgot-pass')}>Nhớ mật khẩu</span>
                      </div>
                      <ForgotPass onClick={() => openModal('ModalResetPassword')}/>
                    </div>
                    <Button className={cx('btn')} primary>
                      Đăng nhập
                    </Button>
                    <div className={cx('register-wrapper')}>
                      <span className={cx('not-account')}>Bạn chưa có tài khoản?</span>
                      <span className={cx('register')} onClick={() => openModal('ModalRegister')}>Đăng kí</span>
                    </div>
                    <div className={cx('line-wrapper')}>
                        <div className={cx('line')}>
  
                        </div>
                        <span className={cx('or')}>
                          Hoặc đăng nhập với
                        </span>
                        <div className={cx('line')}>
  
                        </div>
                    </div>
                    <div className={cx('login-form')}>
                      <Button className={cx('btn-facebook')}>
                          <FontAwesomeIcon icon={faFacebook} className={cx('icon')}/>
                          Facebook
                      </Button>
                      <Button className={cx('btn-google')}>
                          <FontAwesomeIcon icon={faGoogle} className={cx('icon')}/>
                          Google
                      </Button>
                    </div>
                  </form>
                </div>
            </div>
        </div>  
  )
}

export default ModalSignIn;
