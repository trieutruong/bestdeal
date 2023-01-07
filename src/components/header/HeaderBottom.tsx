import styles from "styles/HeaderBottom.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Category from "./Category";

const cx = classNames.bind(styles);

const HeaderBottom = () => {
  return (
    <div className={cx("header__nav")}>
      <div className={cx("container")}>
        <div className={cx("header__nav-wrap")}>
          <div className={cx("header__nav-menu")}>
            <div className={cx("header__nav-menu-dropdown")}>
              <div className={cx("hamburger")}>
                <FontAwesomeIcon icon={faBars} className={cx("icon")} />
              </div>
              <span>DANH MỤC SẢN PHẨM</span>
            </div>
            <Category className={cx('category-bottom')}/>
          </div>
          <ul className={cx("header__nav-list")}>
            <li className={cx("header__nav-list-item")}>
              <Link
                className={cx("header__nav-list-item-link")}
                href="/thong-tin/gioi-thieu"
              >
                GIỚI THIỆU
              </Link>
            </li>
            <li className={cx("header__nav-list-item")}>
              <Link className={cx("header__nav-list-item-link")} href="/thuong-hieu">
                THƯƠNG HIỆU
              </Link>
            </li>
            <li className={cx("header__nav-list-item")}>
              <Link
                className={cx("header__nav-list-item-link")}
                href="/promotion"
              >
                KHUYẾN MÃI
              </Link>
            </li>
            <li className={cx("header__nav-list-item")}>
              <Link
                className={cx("header__nav-list-item-link")}
                href="/newsproduct"
              >
                HÀNG MỚI VỀ
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
