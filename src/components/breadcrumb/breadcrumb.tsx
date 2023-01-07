import { faChevronRight, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import React from "react";
import styles from "styles/components/BreadCrumb/BreadCrumb.module.scss";
import Link from "next/link";

const cx = classNames.bind(styles);

interface Props {
  className?: any;
}

const BreadCrumb: React.FC<Props> = ({ className }) => {
  const classes = cx("breadcrumb-wrap", {
    [className]: className,
  });

  return (
    <div className={classes}>
      <Link
        href="/"
        className={cx("breadcrumb-link", "breadcrumb-link--active")}
      >
        <FontAwesomeIcon
          icon={faHouse}
          className={cx("breadcrumb-icon-home")}
        />
        <span>Trang chủ</span>
        <FontAwesomeIcon icon={faChevronRight} className={cx("arrow-icon")} />
      </Link>
      <Link href="" className={cx("breadcrumb-link")}>
        <span>Máy cầm tay</span>
        <FontAwesomeIcon icon={faChevronRight} className={cx("arrow-icon")} />
      </Link>
      <Link href="" className={cx("breadcrumb-link")}>
        <span>Máy chạy điện</span>
        <FontAwesomeIcon icon={faChevronRight} className={cx("arrow-icon")} />
      </Link>
      <Link href="" className={cx("breadcrumb-link", "active")}>
        <span>Máy khoan BOSCH GSB 13RE 650W</span>
      </Link>
    </div>
  );
};

export default BreadCrumb;
