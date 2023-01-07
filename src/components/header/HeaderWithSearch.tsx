import styles from "styles/HeaderWithSearch.module.scss";
import classNames from "classnames/bind";
import HeaderLogo from "./HeaderLogo";
import { faOpencart } from "@fortawesome/free-brands-svg-icons";
import SignIn from "./SignIn";
import Menu from "./Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarChart,
  faBars,
  faChevronDown,
  faPhone,
  faSearch,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Link from "next/link";
import Search from "./Search";
import Category from "./Category";

const cx = classNames.bind(styles);

const HeaderWithSearch = () => {
  const [show, setShow] = useState(false);
  const [headerTop, setHeaderTop] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setHeaderTop("fixed");
      } else {
        setHeaderTop("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cx("header-with-search", headerTop === "fixed" ? "fixed" : "")}
    >
      <div className={cx("header-with-search-inner")}>
        {headerTop === "fixed" ? "" : <HeaderLogo />}
        {headerTop && (
          <div className={cx("fixed-category")}>
            <div className={cx("fixed-category-box")}>
              <div className={cx("hamburger")}>
                <FontAwesomeIcon
                  icon={faBars}
                  className={cx("hamburger-icon")}
                />
              </div>
              <span className={cx("title")}>DANH MỤC SẢN PHẨM</span>
            </div>
            <Category className={cx("category-dropdown")} isDropdown={true} />
          </div>
        )}
        <div className={cx("header-search")}>
          <button
            className={cx("header__search-select")}
            onClick={() => setShow(!show)}
          >
            Tất cả
            <FontAwesomeIcon
              icon={faSortDown}
              className={cx("header__search-select-icon")}
            />
          </button>
          {show ? <Menu /> : ""}
          <Search />
          <button className={cx("header__search-btn")}>
            <FontAwesomeIcon icon={faSearch} className={cx("search-icon")} />
          </button>
        </div>
        <div className={cx("header__right")}>
          {headerTop ? (
            ""
          ) : (
            <div className={cx("header__right-item")}>
              <span>Hệ thống</span>
              <h3 className={cx("header-right-item__store")}>
                01 cửa hàng
                <i className="header-right-item__store-icon fa-solid fa-sort-down"></i>
              </h3>
            </div>
          )}
          <SignIn />
          <Link
            className={cx("header__right-item", "header__right-item--cart")}
            href="/checkout"
          >
            <span>Giỏ hàng</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderWithSearch;
