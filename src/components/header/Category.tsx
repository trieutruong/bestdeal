import styles from "styles/Category.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

interface Props {
  className?: any;
  isDropdown?: boolean;
}

const Category: React.FC<Props> = ({ className, isDropdown }) => {
  const { pathname } = useRouter();
  const [isDisPlay, setIsDisPlay] = useState(true);

  useEffect(() => {
    if (pathname !== "/") {
      setIsDisPlay(false);
    } else {
      setIsDisPlay(true);
    }
  }, [pathname]);

  const classes = cx("category", isDisPlay && !isDropdown ? "display" : "", {
    [className]: className,
  });

  return (
    <div className={classes}>
      <ul className={cx("category__list")}>
        <li className={cx("category__item")}>
          <Link
            href={{
              pathname: "/category",
              query: {
                title: "dung-cu-cam-tay",
              },
            }}
            className={cx("category-item__link")}
          >
            Dụng cụ cầm tay
          </Link>
          <FontAwesomeIcon
            icon={faChevronRight}
            className={cx("category__icon")}
          />
        </li>
        <li className={cx("category__item")}>
          <Link
            href={{
              pathname: "/category",
              query: {
                title: "may-xay-dung-may-cam-tay",
              },
            }}
            className={cx("category-item__link")}
          >
            Máy xây dựng - Máy cầm tay
          </Link>
          <FontAwesomeIcon
            icon={faChevronRight}
            className={cx("category__icon")}
          />
        </li>
        <li className={cx("category__item")}>
          <Link
            href={{
              pathname: "/category",
              query: {
                title: "vat-tu-tieu-hao",
              },
            }}
            className={cx("category-item__link")}
          >
            Vật tư tiêu hao
          </Link>
          <FontAwesomeIcon
            icon={faChevronRight}
            className={cx("category__icon")}
          />
        </li>
        <li className={cx("category__item")}>
          <Link
            href={{
              pathname: "/category",
              query: {
                title: "vat-tu-nganh-nuoc",
              },
            }}
            className={cx("category-item__link")}
          >
            Vật tư ngành nước
          </Link>
          <FontAwesomeIcon
            icon={faChevronRight}
            className={cx("category__icon")}
          />
        </li>
        <li className={cx("category__item")}>
          <Link
            href={{
              pathname: "/category",
              query: {
                title: "vat-tu-nganh-dien",
              },
            }}
            className={cx("category-item__link")}
          >
            Vật tư ngành điện
          </Link>
          <FontAwesomeIcon
            icon={faChevronRight}
            className={cx("category__icon")}
          />
        </li>
        <li className={cx("category__item")}>
          <Link
            href={{
              pathname: "/category",
              query: {
                title: "bu-long-oc-vit",
              },
            }}
            className={cx("category-item__link")}
          >
            Bu lông - ốc vít
          </Link>
          <FontAwesomeIcon
            icon={faChevronRight}
            className={cx("category__icon")}
          />
        </li>
        <li className={cx("category__item")}>
          <Link
            href={{
              pathname: "/category",
              query: {
                title: "khoa-cua",
              },
            }}
            className={cx("category-item__link")}
          >
            Khóa cửa
          </Link>
          <FontAwesomeIcon
            icon={faChevronRight}
            className={cx("category__icon")}
          />
        </li>
        <li className={cx("category__item")}>
          <Link
            href={{
              pathname: "/category",
              query: {
                title: "ban-le",
              },
            }}
            className={cx("category-item__link")}
          >
            Bản lề
          </Link>
          <FontAwesomeIcon
            icon={faChevronRight}
            className={cx("category__icon")}
          />
        </li>
        <li className={cx("category__item")}>
          <Link
            href={{
              pathname: "/category",
              query: {
                title: "thang",
              },
            }}
            className={cx("category-item__link")}
          >
            Thang
          </Link>
          <FontAwesomeIcon
            icon={faChevronRight}
            className={cx("category__icon")}
          />
        </li>
        <li className={cx("category__item")}>
          <Link
            href={{
              pathname: "/category",
              query: {
                title: "xe-day-hang",
              },
            }}
            className={cx("category-item__link")}
          >
            Xe đẩy hàng
          </Link>
          <FontAwesomeIcon
            icon={faChevronRight}
            className={cx("category__icon")}
          />
        </li>
      </ul>
    </div>
  );
};

export default Category;
