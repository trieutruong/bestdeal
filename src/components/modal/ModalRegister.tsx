import styles from 'styles/components/Modal/ModalRegister.module.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faOpencart } from '@fortawesome/free-brands-svg-icons';
import { CloseIcon } from '../Icons';
import Input from './Input';
import ForgotPass from './ForgotPass';
import Button from '../button/Button';

const cx = classNames.bind(styles)

interface Props {
  openModal? : any,
}

const ModalRegister : React.FC<Props> = ({ openModal }) => {
  
  return (
      <div className={cx('modal')}>
          <div className={cx('modal__overlay')}>
          
          </div>
          <div className={cx('modal__body')}>
              <div className={cx('header')}>
                <span className={cx('heading')}>TẠO TÀI KHOẢN COCOLUX</span>
                <div className={cx('close-btn')} onClick={() => openModal('')}>
                  <CloseIcon className={cx('icon')} width="12px" height="12px"/>
                </div>
              </div>
              <div className={cx('body')}>
                <form method="POST" action="/">
                  <div className={cx('form-control')}>
                      <Input type="email" placeholder="Họ và tên"/>
                      <span className={cx('message')}>Vui lòng nhập Họ và tên</span>
                  </div>
                  <div className={cx('form-control')}>
                      <Input type="number" placeholder="Số điện thoại"/>
                      <span className={cx('message')}>Vui lòng nhập Số điện thoại</span>
                  </div>
                  <div className={cx('form-control')}>
                      <Input type="password" placeholder="Mật khẩu"/>
                      <span className={cx('message')}>Vui lòng nhập Mật khẩu</span>
                  </div>
                  <div className={cx('gender-wrapper')}>
                    <div className={cx('form-radio')}>
                        <div className={cx('gender')}>
                            <Input type="radio" className={cx('gender-input')} value="male"/>
                            Nam
                        </div>
                        <div className={cx('gender')}>
                            <Input type="radio" className={cx('gender-input')} value="female"/>
                            Nữ
                        </div>
                    </div>
                    <div className={cx('message')}>Vui lòng chọn giới tính</div>
                  </div>
                  <div className={cx('promotion-form')}>
                    <Input type="checkbox" className={cx('checkbox')}/>
                    <label>Nhận thông tin khuyến mãi qua e-mail</label>
                  </div>
                  <div className={cx('agree')}>
                    Tôi đã đọc và đồng ý thực hiện mọi giao dịch mua bán theo điều kiện sử dụng và chính sách của COCOLUX
                  </div>
                  <Button className={cx('btn')} primary>
                    Đăng kí tài khoản
                  </Button>
                  <div className={cx('register-wrapper')}>
                    <span className={cx('not-account')}>Bạn chưa có tài khoản?</span>
                    <span className={cx('register')} onClick={() => openModal('')}>Đăng nhập</span>
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

export default ModalRegister;
