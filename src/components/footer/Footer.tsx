import styles from "styles/components/Footer/Footer.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faApple,
  faAppStore,
  faFacebook,
  faFacebookSquare,
  faGoogle,
  faGooglePlay,
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { ZaloIcon } from "../Icons";
import Button from "../button/Button";
import Link from "next/link";

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <footer className={cx("footer")}>
      <div className={cx("flud-container")}>
        <div className={cx("row", "footer-top")}>
          <div className={cx("grid__column-w-20", "footer-top__brand-info")}>
            <div className={cx("footer-top-brand-info__logo")}>
              <Link
                href="/store"
                className={cx("footer-top-brand-info__logo-link")}
              >
                <img src="/img/logo_cocoshop.svg" alt="" />
              </Link>
            </div>
            <div className={cx("footer-top-brand-info__content")}>
              BestDeal là hệ thống phân phối vật tư xây dựng và có quy mô hàng
              đầu tại Việt Nam. Đến với BestDeal bạn có thể hoàn toàn yên tâm
              khi sẽ mua được các loại vật tư phù hợp cho công trình với giá rẻ
              nhất.
            </div>
          </div>
          <div className={cx("footer-content__policy")}>
            <h4 className={cx("footer-content__policy-title")}>VỀ BestDeal</h4>
            <div className={cx("footer-content__policy-list-item")}>
              <Link
                href="/introduce"
                className={cx("footer-content__policy-item-link")}
              >
                Câu chuyện thương hiệu
              </Link>
              <Link
                href="/introduce"
                className={cx("footer-content__policy-item-link")}
              >
                Về chúng tôi
              </Link>
              <Link
                href="/introduce"
                className={cx("footer-content__policy-item-link")}
              >
                Liên hệ
              </Link>
            </div>
          </div>
          <div className={cx("footer-content__policy")}>
            <h4 className={cx("footer-content__policy-title")}>CHÍNH SÁCH</h4>
            <div className={cx("footer-content__policy-list-item")}>
              <Link
                href="/thong-tin/gioi-thieu"
                className={cx("footer-content__policy-item-link")}
              >
                Điều khoản sử dụng
              </Link>
              <Link href="/thuong-hieu" className={cx("footer-content__policy-item-link")}>
                Chính sách đổi trả sản phẩm
              </Link>
              <Link href="" className={cx("footer-content__policy-item-link")}>
                Chính sách và quy định chung
              </Link>
              <Link href="" className={cx("footer-content__policy-item-link")}>
                Chính sách và giao nhận thanh toán
              </Link>
              <Link href="" className={cx("footer-content__policy-item-link")}>
                Chính sách bảo mật thông tin cá nhân
              </Link>
            </div>
          </div>
          <div className={cx("footer-content__policy")}>
            <h4 className={cx("footer-content__policy-title")}>
              BestDeal MEMBER
            </h4>
            <div className={cx("footer-content__policy-list-item")}>
              <Link href="" className={cx("footer-content__policy-item-link")}>
                Quyền lợi thành viên
              </Link>
              <Link href="" className={cx("footer-content__policy-item-link")}>
                Thông tin thành viên
              </Link>
              <Link href="" className={cx("footer-content__policy-item-link")}>
                Theo dõi đơn hàng
              </Link>
              <Link href="" className={cx("footer-content__policy-item-link")}>
                Hướng dẫn mua hàng online
              </Link>
            </div>
          </div>
          <div className={cx("grid__column-w-3 footer-content__lisence")}>
            <div className={cx("footer-content__fb-thumbnail")}></div>

            <div className={cx("footer-content__download-app-license")}>
              <div className={cx("footer-content__download-apps")}>
                <img
                  src="/img/QR-code-appstore.png"
                  alt=""
                  className={cx("download-apps__qr-code-img")}
                />
                <div className={cx("download-apps__box")}>
                  <Link href="" className={cx("download-apps__box-link")}>
                    <FontAwesomeIcon
                      icon={faApple}
                      className={cx("download-apps__icon")}
                    />
                    <span className={cx("download-apps-name")}>App Store</span>
                  </Link>
                  <Link href="" className={cx("download-apps__box-link")}>
                    <FontAwesomeIcon
                      icon={faGooglePlay}
                      className={cx("download-apps__icon")}
                    />
                    <span className={cx("download-apps-name")}>
                      Google Play
                    </span>
                  </Link>
                </div>
              </div>
              <div className={cx("footer-content__license-page")}>
                <img
                  src="/img/logo-da-thong-bao-bo-cong-thuong-mau-xanh.png"
                  alt=""
                  className={cx("footer-content__img")}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={cx("row", "footer-bottom")}>
          <div className={cx("grid__column-w-20", "footer-bottom-info")}>
            <span className={cx("footer-bottom-info__title")}>
              BestDeal thuộc bản quyền của bestdeal - Hệ thống phân phối vật tư
              xây dựng giá rẻ
            </span>
            <Link href="/store" className={cx("footer-bottom-info__link")}>
              Hệ thống cửa hàng của Bestdeal
            </Link>
            <Link href="/" className={cx("footer-bottom-info__link")}>
              Website: https://bestdeal.com
            </Link>
            <Link href="" className={cx("footer-bottom-info__link")}>
              Hotline: +84-346505377
            </Link>
            <Link href="" className={cx("footer-bottom-info__link")}>
              Email: cskh@bestdeal.com
            </Link>
          </div>
          <div className={cx("footer-bottom-social-box")}>
            <div className={cx("footer-bottom-box")}>
              <h4 className={cx("footer-bottom__title")}>Kết nối</h4>
              <div className={cx("footer-bottom__box-icon")}>
                <Link href="" className={cx("footer-bottom__box-icon-link")}>
                  <FontAwesomeIcon
                    icon={faFacebookSquare}
                    className={cx("footer-bottom__icon")}
                  />
                </Link>
                <Link href="" className={cx("footer-bottom__box-icon-link")}>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className={cx("footer-bottom__icon")}
                  />
                </Link>
                <Link href="" className={cx("footer-bottom__box-icon-link")}>
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className={cx("footer-bottom__icon")}
                  />
                </Link>
                <Link href="" className={cx("footer-bottom__box-icon-link")}>
                  <FontAwesomeIcon
                    icon={faTiktok}
                    className={cx("footer-bottom__icon")}
                  />
                </Link>
                <Link href="" className={cx("footer-bottom__box-icon-link")}>
                  <ZaloIcon
                    className={cx("footer-bottom__icon")}
                    width="19px"
                    height="19px"
                  />
                </Link>
              </div>
            </div>
            <div className={cx("footer-bottom-box")}>
              <h4 className={cx("footer-bottom__title")}>
                Phương thức thanh toán
              </h4>
              <div className={cx("footer-bottom__box-icon")}>
                <img
                  src="/img/ic-cash.png.svg"
                  alt=""
                  className={cx("footer-bottom__img")}
                />
                <img
                  src="/img/ic-internet-banking.svg"
                  alt=""
                  className={cx("footer-bottom__img")}
                />
                <img
                  src="/img/ic-visa.png.svg"
                  alt=""
                  className={cx("footer-bottom__img")}
                />
                <img
                  src="/img/ic-master-card.svg"
                  alt=""
                  className={cx("footer-bottom__img")}
                />
              </div>
            </div>
          </div>
          <div className={cx("grid__column-w-3 footer-bottom-register-box")}>
            <h4 className={cx("footer-bottom__title")}>ĐĂNG KÝ NHẬN BẢN TIN</h4>
            <span className={cx("footer-bottom__sub-title")}>
              Đừng bỏ lỡ hàng ngàn sản phẩm và chương trình siêu hấp dẫn
            </span>

            <div className={cx("footer-bottom__registration-wrap")}>
              <input
                type="email"
                placeholder="Vui lòng nhập email của bạn"
                className={cx("footer-bottom-register__input")}
              />
              <Button className={cx("footer-bottom__btn")}>ĐĂNG KÝ</Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
