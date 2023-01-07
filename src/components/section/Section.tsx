import classNames from "classnames/bind";
import React from "react";
import styles from "styles/components/Section/Section.module.scss";
import Link from "next/link";
import Item from "../Item/Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

interface Props {
  title: string;
  view: string;
  children: any;
  icon?: boolean;
  mg16?: boolean;
  menu?: any;
  reverse?: boolean;
}

const Section: React.FC<Props> = ({
  title,
  view,
  children,
  icon,
  mg16,
  menu,
  reverse,
}) => {
  return (
    <div className={cx("bg-white", mg16 ? "mg-top" : "")}>
      {title === "FLASH DEAL" ||
      title === "SẢN PHẨM HOT" ||
      title === "THƯƠNG HIỆU NỔI BẬT" ||
      title === "TIN TỨC & SỰ KIỆN" ? (
        <div className={cx("bg-white__header", "row")}>
          <h2 className={cx("title", "col l-6 m-6 c-6")}>
            {title === "FLASH DEAL" || title === "SẢN PHẨM HOT" ? (
              <Link className={cx("bg-white__link")} href="/hotItem">
                {icon && (
                  <FontAwesomeIcon icon={faFire} className={cx("icon")} />
                )}
                {title}
              </Link>
            ) : (
              " "
            )}
            {title === "THƯƠNG HIỆU NỔI BẬT" ? (
              <Link className={cx("bg-white__link")} href="/brand">
                {icon && (
                  <FontAwesomeIcon icon={faFire} className={cx("icon")} />
                )}
                {title}
              </Link>
            ) : (
              " "
            )}
          </h2>
          <h2 className={cx("title", "col l-6 m-6 c-6")}>
            {title === "FLASH DEAL" || title === "SẢN PHẨM HOT" ? (
              <Link className={cx("bg-white__link")} href="/hotItem">
                {view}
              </Link>
            ) : (
              ""
            )}
            {title === "THƯƠNG HIỆU NỔI BẬT" ? (
              <Link className={cx("bg-white__link")} href="/brand">
                {view}
              </Link>
            ) : (
              ""
            )}
          </h2>
        </div>
      ) : (
        <div
          className={cx(
            "bg-white__header",
            title === "MÁY CẦM TAY" || title === "VẬT TƯ NGÀNH NƯỚC"
              ? "bg-white__header--row-reverse"
              : "",
            "bg-grey"
          )}
        >
          <h2 className={cx("section-category__title")}>
            <Link
              href={{ pathname: `/category/`, query: { title: title } }}
              className={cx("section-category-title__link")}
            >
              <span>{title}</span>
            </Link>
            <span className={cx("section-category__title-block-top")}></span>
          </h2>
          <ul
            className={cx(
              "section-category__list",
              title === "MÁY CẦM TAY" || title === "VẬT TƯ NGÀNH NƯỚC"
                ? "section-category__list--row-reverse"
                : ""
            )}
          >
            {menu &&
              menu.map((subCategory: any, index: number) => (
                <li className={cx("section-category__item")} key={index}>
                  <Link
                    href={{
                      pathname: "/category/",
                      query: { item: subCategory },
                    }}
                    className={cx("section-category-item__link")}
                  >
                    {subCategory}
                  </Link>
                </li>
              ))}
          </ul>
          <h2 className={cx("bg-white__title")}>
            <Link
              href={{ pathname: `/category/`, query: { title: title } }}
              className={cx("bg-white__link")}
            >
              {view}
            </Link>
          </h2>
        </div>
      )}
      <div className={cx("bg-white__body")}>
        {title === "FLASH DEAL" ||
        title === "THƯƠNG HIỆU NỔI BẬT" ||
        title === "SẢN PHẨM HOT" ? (
          <div className={cx("bg-white-row")}>{children}</div>
        ) : (
          <div
            className={cx(
              "bg-white-row",
              "row sm-gutter",
              reverse ? "row-reverse" : ""
            )}
          >
            <div className={cx("col col-lg-2 col-m-0")}></div>
            <div className={cx("col col-lg-10")}>
              <div className={cx("section-category-product")}>
                <div className={cx("row sm-gutter")}>{children}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Section;
